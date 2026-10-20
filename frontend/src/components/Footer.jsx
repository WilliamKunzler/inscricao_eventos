function Footer() {
    return (
        <footer className="px-10 md:px-24 xl:px-36 py-8 bg-gray-900 text-white flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
            <p className="font-bold text-base">Conexão<span className="text-purple-700">TECH</span></p>
            <p className="text-gray-400">15 de Novembro · São Paulo, SP</p>
            <p className="text-gray-400">© {new Date().getFullYear()} ConexãoTECH. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;
