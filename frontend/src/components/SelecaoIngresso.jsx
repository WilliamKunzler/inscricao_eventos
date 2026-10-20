import { GraduationCap, Briefcase } from "lucide-react";

const ingressos = [
    { valor: "estudante", titulo: "Estudante", descricao: "Para quem está cursando ensino técnico ou superior.", icone: GraduationCap },
    { valor: "profissional", titulo: "Profissional", descricao: "Para quem já atua no mercado de trabalho.", icone: Briefcase },
];

function SelecaoIngresso({ valor, onChange, erro }) {
    return (
        <div className="flex flex-col gap-2">
            <legend className="font-semibold mb-2">Tipo de ingresso</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ingressos.map(({ valor: opcao, titulo, descricao, icone: Icone }) => {
                    const ativo = valor === opcao;
                    return (
                        <label key={opcao}
                            className={`flex flex-col gap-2 p-4 rounded-xl border-2 cursor-pointer transition-colors ${ativo ? "border-purple-700 bg-purple-50" : "border-gray-300 hover:border-purple-700"}`}>
                            <input type="radio" name="ingresso" value={opcao} checked={ativo}
                                onChange={() => onChange(opcao)} className="sr-only" />
                            <Icone size={24} className={ativo ? "text-purple-700" : "text-gray-500"} />
                            <span className="font-semibold">{titulo}</span>
                            <span className="text-sm text-gray-500">{descricao}</span>
                        </label>
                    );
                })}
            </div>
            {erro && <p className="text-sm text-red-500">{erro}</p>}
        </div>
    );
}

export default SelecaoIngresso;
