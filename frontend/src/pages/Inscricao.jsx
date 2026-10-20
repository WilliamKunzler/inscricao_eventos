import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import SelecaoIngresso from "../components/SelecaoIngresso";
import CardEvento from "../components/CardEvento";

const estadoInicial = { nome: "", email: "", telefone: "", ingresso: "" };

const formatarTelefone = (valor) => {
    const d = valor.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return d.length ? `(${d}` : "";
    if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

function InscricaoPage() {
    const [form, setForm] = useState(estadoInicial);
    const [erros, setErros] = useState({});
    const [enviado, setEnviado] = useState(false);

    const atualizarCampo = (campo, valor) => setForm((prev) => ({ ...prev, [campo]: valor }));

    const enviar = (e) => {
        e.preventDefault();
        if (!validarCampos()) return;
        setEnviado(true)
        setForm(estadoInicial)
        Swal.fire({
            icon: "success",
            title: "Inscrição confirmada!",
            text: "Sua presença no ConexãoTECH está garantida.",
            confirmButtonText: "Ok",
            confirmButtonColor: "#7e22ce",
        })
    }

    const validarCampos = () => {
        const novosErros = {};

        if (!form.nome.trim()) novosErros.nome = "Informe seu nome.";
        if (!form.email.trim()) novosErros.email = "Informe seu e-mail.";
        if (!form.ingresso) novosErros.ingresso = "Selecione o tipo de ingresso.";

        setErros(novosErros);
        return Object.keys(novosErros).length === 0;
    }

    const classeInput = (campo) =>
        `w-full rounded-xl border px-4 py-3 outline-none transition-colors focus:border-purple-700 ${erros[campo] ? "border-red-500" : "border-gray-300"}`;

    return (
        <div>
            <section className="px-10 md:px-24 xl:px-36 py-12 min-h-screen flex flex-col items-center lg:flex-row lg:items-center lg:justify-center gap-12">
                <div className="w-full max-w-xl flex flex-col gap-8 lg:flex-1">
                    <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-purple-700 w-fit">
                        <ArrowLeft size={16} />
                        Voltar
                    </Link>
                    <>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-3xl font-semibold">Inscrição</h1>
                            <p className="text-gray-500">Preencha os dados abaixo para garantir sua presença no Conexão<span className="text-purple-700 font-semibold">TECH</span>.</p>
                        </div>

                        <form onSubmit={enviar} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold">Nome</label>
                                <input name="nome" type="text" autoComplete="name" className={classeInput("nome")} placeholder="Seu nome completo" value={form.nome} onChange={(e) => atualizarCampo("nome", e.target.value)} />
                                {erros.nome && <p className="text-sm text-red-500">{erros.nome}</p>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-semibold">E-mail</label>
                                <input name="email" type="email" autoComplete="email" className={classeInput("email")} placeholder="voce@email.com" value={form.email} onChange={(e) => atualizarCampo("email", e.target.value)} />
                                {erros.email && <p className="text-sm text-red-500">{erros.email}</p>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-semibold"> Telefone <span className="font-normal text-gray-400">(opcional)</span></label>
                                <input name="telefone" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={15} className={classeInput("telefone")} placeholder="(11) 99999-9999" value={form.telefone} onChange={(e) => atualizarCampo("telefone", formatarTelefone(e.target.value))} />                            </div>

                            <SelecaoIngresso
                                valor={form.ingresso}
                                onChange={(ingresso) => atualizarCampo("ingresso", ingresso)}
                                erro={erros.ingresso}
                            />

                            <button type="submit"
                                className="text-white bg-purple-700 py-3 px-6 rounded-3xl font-semibold cursor-pointer hover:bg-purple-800 transition-colors">
                                Confirmar inscrição
                            </button>
                        </form>
                    </>
                </div>
                <div className="hidden lg:block lg:flex-1 max-w-md">
                    <CardEvento />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default InscricaoPage;