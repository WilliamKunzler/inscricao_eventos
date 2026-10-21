import * as inscricoesService from '../services/inscricoes.service.js';

export const listarInscritos = async (req, res) => {
    const result = await inscricoesService.listarInscritos();
    return res.status(result.status).json(result);
}

export const criarInscricao = async (req, res) => {
    const result = await inscricoesService.criarInscricao(req.body);
    return res.status(result.status).json(result);
}

export const deletarInscricao = async (req, res) => {
    const result = await inscricoesService.deletarInscricao(req.params.id);
    return res.status(result.status).json(result);
}