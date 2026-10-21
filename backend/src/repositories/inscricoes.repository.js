import db from '../database/db.js'

export const listarInscritos = async () => {
    return db.prepare('SELECT * FROM inscritos').all()
}

export const criarInscricao = async (inscricao) => {
    const { nome, email, telefone, tipoIngresso } = inscricao;
    db.prepare('INSERT INTO inscritos (nome, email, telefone, tipoIngresso) VALUES (?, ?, ?, ?)').run(nome, email, telefone ?? null, tipoIngresso);
}

export const buscarId = async (id) => {
    return db.prepare('SELECT * FROM inscritos WHERE id = ?').get(id);
}

export const deletarInscricao = async (id) => {
    db.prepare('DELETE FROM inscritos WHERE id = ?').run(id);
}

