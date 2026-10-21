import express from "express";

const router = express.Router();

function vazio(req, res) {
    res.status(200).json({ message: "Rota vazia" });
}

// colocar o acesso aos controllers aqui no lugar do vazio
router.get("/", vazio);
router.post("/", vazio);
router.delete("/:id", vazio);

export default router;
