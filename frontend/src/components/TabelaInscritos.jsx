import { Trash2 } from "lucide-react";
import BadgeIngresso from "./BadgeIngresso";

function TabelaInscritos({ inscritos, onExcluir }) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
                <thead className="bg-gray-900 text-sm text-white">
                    <tr>
                        <th className="px-6 py-3 font-semibold">Nome</th>
                        <th className="px-6 py-3 font-semibold">E-mail</th>
                        <th className="px-6 py-3 font-semibold">Telefone</th>
                        <th className="px-6 py-3 font-semibold">Ingresso</th>
                        <th className="px-6 py-3 font-semibold text-right">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {inscritos.map((inscrito) => (
                        <tr key={inscrito.id} className="odd:bg-white even:bg-purple-50 hover:bg-purple-100 transition-colors">
                            <td className="px-6 py-4 font-semibold whitespace-nowrap">{inscrito.nome}</td>
                            <td className="px-6 py-4 text-gray-600">{inscrito.email}</td>
                            <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{inscrito.telefone || "Não informado"}</td>
                            <td className="px-6 py-4">
                                <BadgeIngresso tipo={inscrito.tipoIngresso} />
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button
                                    type="button"
                                    onClick={() => onExcluir(inscrito)}
                                    aria-label={`Excluir ${inscrito.nome}`}
                                    className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaInscritos;
