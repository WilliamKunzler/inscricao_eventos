
import * as inscricoesRepository from '../repositories/inscricoes.repository.js';
import { emailValido } from '../utils/emailValido.js';

const TIPOS_INGRESSO = ['profissional', 'estudante'];

export const listarInscritos = async () => {
    const inscritos = await inscricoesRepository.listarInscritos();
    return {
        status: 200,
        message: "Inscritos retornados com sucesso",
        inscritos: inscritos
    }
}

export const criarInscricao = async (inscricao = {}) => {
    const { nome, tipoIngresso, telefone } = inscricao;
    const email = typeof inscricao.email === 'string' ? inscricao.email.trim() : inscricao.email;

    if (!email || !nome || !tipoIngresso) {
        return {
            status: 400,
            message: "Campos obrigatórios não preenchidos!"
        }
    }

    if (typeof nome !== 'string' || typeof tipoIngresso !== 'string' || (telefone != null && typeof telefone !== 'string')) {
        return {
            status: 400,
            message: "Campos inválidos!"
        }
    }

    if (!TIPOS_INGRESSO.includes(tipoIngresso)) {
        return {
            status: 400,
            message: "Tipo de ingresso inválido! Use 'profissional' ou 'estudante'."
        }
    }

    if (!emailValido(email)) {
        return {
            status: 400,
            message: "Email inválido!"
        }
    }

    try {
        await inscricoesRepository.criarInscricao({ ...inscricao, email });
    } catch (error) {
        if (error.code === 'ERR_SQLITE_ERROR' && /UNIQUE/.test(error.message)) {
            return {
                status: 400,
                message: "Email já cadastrado!"
            }
        }
        throw error;
    }

    return {
        status: 201,
        message: "Inscrição criada com sucesso"
    }
}

export const deletarInscricao = async (id) => {
    const inscritoExistente = await inscricoesRepository.buscarId(id);

    if (!inscritoExistente) {
        return {
            status: 404,
            message: "Inscrição não encontrada!"
        }
    }

    await inscricoesRepository.deletarInscricao(id);
    return {
        status: 200,
        message: "Inscrição deletada com sucesso"
    }
}
