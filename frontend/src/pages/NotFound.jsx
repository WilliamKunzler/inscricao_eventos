import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";

function NotFoundPage() {
    return (
        <div>
            <section className="px-10 md:px-24 xl:px-36 py-12 min-h-screen flex flex-col items-center justify-center gap-6 text-center">
                <p className="text-8xl font-bold text-purple-700">404</p>
                <h1 className="text-3xl font-semibold">Página não encontrada</h1>
                <p className="text-gray-500 max-w-md">
                    A página que você procura não existe ou foi movida. Volte para o início do Conexão<span className="text-purple-700 font-semibold">TECH</span>.
                </p>
                <Link
                    to="/"
                    className="flex items-center gap-2 rounded-xl bg-purple-700 px-6 py-3 font-semibold text-white hover:bg-purple-800 transition-colors"
                >
                    <ArrowLeft size={16} />
                    Voltar ao início
                </Link>
            </section>
            <Footer />
        </div>
    )
}

export default NotFoundPage;
