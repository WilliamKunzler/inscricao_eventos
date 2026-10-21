import { DatabaseSync } from 'node:sqlite'
import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const caminho = process.env.DB_PATH || 'src/database/inscricoes.db'
mkdirSync(dirname(caminho), { recursive: true })

const db = new DatabaseSync(caminho)

db.exec(`
  CREATE TABLE IF NOT EXISTS inscritos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    telefone TEXT,
    tipoIngresso TEXT NOT NULL,
    criadoEm TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`)

export default db
