import { Calendar, MapPin, Users } from "lucide-react";
import ImgHero from "../assets/hero.png"
import ButtonRedirect from "../components/ButtonRedirect";
import Infografico from "../components/Infografico";

function HomePage() {

    return (
        <div>
            <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ImgHero})` }}>
                <div className="h-full w-1/2 flex flex-col items-start justify-center text-white pl-24">
                    <h1 className="text-[80px] font-bold">Conexão <span className="text-purple-700">TECH</span></h1>
                    <p className="text-gray-400">Um encontro para quem acredita no poder da tecnologia e das pessoas para transformar o amanhã.</p>
                    <div className="flex gap-10 my-12">
                        <Infografico icone={Calendar} titulo={"15 de Novembro"} subtitulo={"Das 9h às 18h"} />
                        <Infografico icone={MapPin} titulo={"São Paulo, SP"} subtitulo={"Centro de Convenções"} />
                    </div>
                    <ButtonRedirect placeholder={"Inscreva-se"} destino={"/inscricoes"} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;
