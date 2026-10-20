import { Calendar, MapPin, Users } from "lucide-react";
import ImgHero from "../assets/hero.png"
import ButtonRedirect from "../components/ButtonRedirect";
import Infografico from "../components/Infografico";

function HomePage() {

    return (
        <div>
            <div className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-10 md:items-start md:justify-start md:p-0" style={{ backgroundImage: `url(${ImgHero})` }}>
                <div className="h-full w-full 2xl:w-1/2  flex flex-col items-start justify-center gap-3 text-white md:px-24">
                    <h1 className="text-[45px] min-[480px]:text-[60px] sm:text-[80px] font-bold leading-none flex flex-wrap">Conexão<span className="text-purple-700">TECH</span></h1>
                    <p className="text-gray-400">Um encontro para quem acredita no poder da tecnologia e das pessoas para transformar o amanhã.</p>
                    <div className="flex flex-col min-[500px]:flex-row gap-10 my-12">
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
