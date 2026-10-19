function Infografico({ icone: Icone, titulo, subtitulo }) {
    return (
        <div className="flex items-center gap-4 text-white">
            <Icone size={28} strokeWidth={1.5} className="shrink-0" />
            <div className="flex flex-col">
                <h3 className="text-lg font-medium leading-tight">{titulo}</h3>
                <p className="text-sm text-gray-400">{subtitulo}</p>
            </div>
        </div>
    )
}

export default Infografico;
