import express from "express";
import * as inscricoesController from "../controllers/inscricoes.controller.js";

const router = express.Router();


router.get("/", inscricoesController.listarInscritos);
router.post("/", inscricoesController.criarInscricao);
router.delete("/:id", inscricoesController.deletarInscricao);

export default router;
