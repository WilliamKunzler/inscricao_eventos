function Infografico({ icone: Icone, titulo, subtitulo, black = false }) {
    const corTitulo = black ? "text-black" : "text-white";
    const corTexto = black ? "text-gray-700" : "text-gray-400";

    return (
        <div className={`flex items-center gap-4 ${corTitulo}`}>
            <Icone size={28} strokeWidth={1.5} className="shrink-0" />
            <div className="flex flex-col">
                <h3 className={subtitulo ? "text-lg font-medium leading-tight" : `text-sm ${corTexto} leading-tight max-w-32`}>{titulo}</h3>
                {subtitulo && <p className={`text-sm ${corTexto}`}>{subtitulo}</p>}
            </div>
        </div>
    )
}

export default Infografico;
