function CardPalestrante({ foto, nome, cargo, empresa }) {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-xl border border-gray-200 bg-white/40">
            <img src={foto} alt={nome} className="size-32 object-cover rounded-2xl" />
            <div className="flex flex-col gap-1">
                <h3 className="font-medium">{nome}</h3>
                <p className="text-sm text-gray-500 leading-tight">{cargo} na {empresa}</p>
            </div>
        </div>
    )
}

export default CardPalestrante;
