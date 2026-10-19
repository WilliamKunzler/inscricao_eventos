import { Routes, Route } from "react-router"
import HomePage from "./pages/Home";
import InscricaoPage from "./pages/Inscricao";
import InscritosPage from "./pages/Inscritos";
import NotFoundPage from "./pages/NotFound";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inscricoes" element={<InscricaoPage />} />
            <Route path="/inscritos" element={<InscritosPage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes;