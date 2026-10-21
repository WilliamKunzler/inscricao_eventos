const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const requisicao = async (caminho, opcoes) => {
    const resposta = await fetch(`${API_URL}${caminho}`, opcoes);
    const dados = await resposta.json();
    if (!resposta.ok) throw new Error(dados.message || "Erro inesperado.");
    return dados;
};

export const listarInscritos = async () => {
    const { inscritos } = await requisicao("/inscricoes");
    return inscritos;
};

export const criarInscricao = (inscricao) =>
    requisicao("/inscricoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inscricao),
    });

export const deletarInscricao = (id) => requisicao(`/inscricoes/${id}`, { method: "DELETE" });
