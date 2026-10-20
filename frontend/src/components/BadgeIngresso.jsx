const rotulos = { estudante: "Estudante", profissional: "Profissional" };

function BadgeIngresso({ tipo }) {
    return (
        <span className={`rounded-full px-3 py-1 text-sm font-semibold ${tipo === "estudante" ? "bg-purple-100 text-purple-700" : "bg-indigo-100 text-indigo-800"}`}>
            {rotulos[tipo]}
        </span>
    );
}

export default BadgeIngresso;
