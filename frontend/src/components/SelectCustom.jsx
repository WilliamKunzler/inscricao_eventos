import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

function SelectCustom({ opcoes, valor, onChange }) {
    const [aberto, setAberto] = useState(false);
    const ref = useRef(null);

    const selecionada = opcoes.find((o) => o.valor === valor);

    useEffect(() => {
        const fecharFora = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setAberto(false);
        };
        document.addEventListener("mousedown", fecharFora);
        return () => document.removeEventListener("mousedown", fecharFora);
    }, []);

    const escolher = (novoValor) => {
        onChange(novoValor);
        setAberto(false);
    };

    return (
        <div ref={ref} className="relative w-56">
            <button
                type="button"
                onClick={() => setAberto((prev) => !prev)}
                className={`w-full flex items-center justify-between gap-3 rounded-xl border px-4 py-2.5 font-semibold cursor-pointer border-gray-300 text-gray-600`}
            >
                {selecionada?.rotulo}
                <ChevronDown size={16} className={`transition-transform duration-300 ${aberto ? "rotate-180" : ""}`} />
            </button>

            {aberto && (
                <ul className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-1 shadow-lg">
                    {opcoes.map(({ valor: v, rotulo }) => (
                        <li key={v}>
                            <button
                                type="button"
                                onClick={() => escolher(v)}
                                className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-left cursor-pointer transition-colors ${v === valor ? "bg-purple-50 text-purple-700 font-semibold" : "text-gray-600 hover:bg-gray-100"}`}
                            >
                                {rotulo}
                                {v === valor && <Check size={16} />}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SelectCustom;
