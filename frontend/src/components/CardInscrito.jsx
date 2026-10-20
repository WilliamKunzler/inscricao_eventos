import { Mail, Phone, Trash2 } from "lucide-react";
import BadgeIngresso from "./BadgeIngresso";

function CardInscrito({ inscrito, onExcluir }) {
    const { nome, email, telefone, tipoIngresso } = inscrito;

    return (
        <li className="flex flex-col gap-3 rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold">{nome}</h2>
                <BadgeIngresso tipo={tipoIngresso} />
            </div>
            <p className="flex items-center gap-2 text-gray-600 break-all">
                <Mail size={16} className="shrink-0" />
                {email}
            </p>
            <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-gray-600">
                    <Phone size={16} className="shrink-0" />
                    {telefone || "Não informado"}
                </p>
                <button
                    type="button"
                    onClick={() => onExcluir(inscrito)}
                    aria-label={`Excluir ${nome}`}
                    className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors"
                >
                    <Trash2 size={18} />
                </button>
            </div>
        </li>
    );
}

export default CardInscrito;
