import { Calendar, MapPin, Mic, Users } from "lucide-react";

const detalhes = [
    { icone: Calendar, titulo: "15 de Novembro", subtitulo: "Das 9h às 18h" },
    { icone: MapPin, titulo: "São Paulo, SP", subtitulo: "Presencial" },
    { icone: Mic, titulo: "Palestras e workshops", subtitulo: "Com especialistas da área" },
    { icone: Users, titulo: "Networking", subtitulo: "Conecte-se com a comunidade" },
];

function CardEvento() {
    return (
        <aside className="hidden lg:flex flex-col gap-8 rounded-2xl bg-linear-to-br from-purple-700 via-purple-800 to-indigo-900 p-8 text-white shadow-xl">
            <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-semibold">
                    Conexão<span className="text-purple-300">TECH</span>
                </h2>
                <p className="text-purple-100">
                    Um dia inteiro de conteúdo, inovação e conexões para impulsionar sua carreira em tecnologia.
                </p>
            </div>

            <div className="border-t border-dashed border-white/30" />

            <ul className="flex flex-col gap-5">
                {detalhes.map(({ icone: Icone, titulo, subtitulo }) => (
                    <li key={titulo} className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                            <Icone size={20} />
                        </div>
                        <div>
                            <p className="font-semibold">{titulo}</p>
                            <p className="text-sm text-purple-200">{subtitulo}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default CardEvento;
