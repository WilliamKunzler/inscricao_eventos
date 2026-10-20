import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, LayoutGrid, Table } from "lucide-react";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import CardInscrito from "../components/CardInscrito";
import TabelaInscritos from "../components/TabelaInscritos";

const inscritosIniciais = [];

const filtros = [
    { valor: "todos", rotulo: "Todos" },
    { valor: "estudante", rotulo: "Estudante" },
    { valor: "profissional", rotulo: "Profissional" },
];

const visualizacoes = [
    { valor: "cards", rotulo: "Cards", icone: LayoutGrid },
    { valor: "tabela", rotulo: "Tabela", icone: Table },
];

function InscritosPage() {
    const [inscritos, setInscritos] = useState(inscritosIniciais);
    const [filtro, setFiltro] = useState("todos");
    const [visualizacao, setVisualizacao] = useState("tabela");

    const visiveis = filtro === "todos" ? inscritos : inscritos.filter((i) => i.tipoIngresso === filtro);

    const contar = (valor) => (valor === "todos" ? inscritos.length : inscritos.filter((i) => i.tipoIngresso === valor).length);

    const excluir = async ({ id, nome }) => {
        const { isConfirmed } = await Swal.fire({
            icon: "warning",
            title: "Excluir inscrição?",
            text: `A inscrição de ${nome} será removida.`,
            showCancelButton: true,
            confirmButtonText: "Excluir",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#dc2626",
        });
        if (isConfirmed) setInscritos((prev) => prev.filter((i) => i.id !== id));
    };

    return (
        <div>
            <section className="px-10 md:px-24 xl:px-36 py-12 min-h-screen flex flex-col gap-8">
                <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-purple-700 w-fit">
                    <ArrowLeft size={16} />
                    Voltar
                </Link>

                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl font-semibold">Inscritos</h1>
                    <p className="text-gray-500">
                        {visiveis.length} {visiveis.length === 1 ? "inscrito" : "inscritos"} no Conexão<span className="text-purple-700 font-semibold">TECH</span>.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-3">
                        {filtros.map(({ valor, rotulo }) => (
                            <button
                                key={valor}
                                type="button"
                                onClick={() => setFiltro(valor)}
                                className={`rounded-3xl border px-5 py-2 font-semibold cursor-pointer transition-colors ${filtro === valor ? "bg-purple-700 border-purple-700 text-white" : "border-gray-300 text-gray-600 hover:border-purple-700 hover:text-purple-700"}`}
                            >
                                {rotulo} ({contar(valor)})
                            </button>
                        ))}
                    </div>

                    <div className="flex rounded-xl border border-gray-300 p-1">
                        {visualizacoes.map(({ valor, rotulo, icone: Icone }) => (
                            <button
                                key={valor}
                                type="button"
                                onClick={() => setVisualizacao(valor)}
                                className={`flex items-center gap-2 rounded-lg px-4 py-1.5 font-semibold cursor-pointer transition-colors ${visualizacao === valor ? "bg-purple-700 text-white" : "text-gray-600 hover:text-purple-700"}`}
                            >
                                <Icone size={16} />
                                {rotulo}
                            </button>
                        ))}
                    </div>
                </div>

                {visiveis.length === 0 ? (
                    <p className="text-gray-500">Nenhum inscrito encontrado.</p>
                ) : visualizacao === "cards" ? (
                    <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {visiveis.map((inscrito) => (
                            <CardInscrito key={inscrito.id} inscrito={inscrito} onExcluir={excluir} />
                        ))}
                    </ul>
                ) : (
                    <TabelaInscritos inscritos={visiveis} onExcluir={excluir} />
                )}
            </section>
            <Footer />
        </div>
    )
}

export default InscritosPage;
