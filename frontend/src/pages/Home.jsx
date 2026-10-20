import { Calendar, MapPin, UsersRound, UserStar, Coffee } from "lucide-react";
import ImgHero from "../assets/hero.png"
import ImgSobre from "../assets/sobre.jpg"
import ButtonRedirect from "../components/ButtonRedirect";
import Infografico from "../components/Infografico";
import CardPalestrante from "../components/CardPalestrante";
import Palestrante1 from "../assets/palestrante1.jpg";
import Palestrante2 from "../assets/palestrante2.jpg";
import Palestrante3 from "../assets/palestrante3.jpg";
import Palestrante4 from "../assets/palestrante4.jpg";
import Footer from "../components/Footer";

const palestrantes = [
    { foto: Palestrante4, nome: "Ana Paula Lima", cargo: "Desenvolvedora Full Stack", empresa: "Nubank" },
    { foto: Palestrante2, nome: "Rafael Costa", cargo: "Product Designer", empresa: "Mercado Livre" },
    { foto: Palestrante3, nome: "Juliana Silva", cargo: "Tech Lead", empresa: "Ambev" },
    { foto: Palestrante1, nome: "Bruno Almeida", cargo: "Engenheiro de Software", empresa: "Google" },
];

function HomePage() {

    return (
        <div>
            <section className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-10 md:items-start md:justify-start md:p-0" style={{ backgroundImage: `url(${ImgHero})` }}>
                <div className="h-full w-full 2xl:w-1/2  flex flex-col items-start justify-center gap-3 text-white md:px-24">
                    <h1 className="text-[45px] min-[480px]:text-[60px] sm:text-[80px] font-bold leading-none flex flex-wrap">Conexão<span className="text-purple-700">TECH</span></h1>
                    <p className="text-gray-400">Um encontro para quem acredita no poder da tecnologia e das pessoas para transformar o amanhã.</p>
                    <div className="flex flex-col min-[500px]:flex-row gap-10 my-12">
                        <Infografico icone={Calendar} titulo={"15 de Novembro"} subtitulo={"Das 9h às 18h"} />
                        <Infografico icone={MapPin} titulo={"São Paulo, SP"} subtitulo={"Centro de Convenções"} />
                    </div>
                    <ButtonRedirect placeholder={"Inscreva-se"} destino={"/inscricoes"} />
                </div>
            </section>

            <section className="px-10 md:px-24 xl:px-36 mt-20 flex flex-col xl:flex-row justify-between">
                <div className="w-full xl:w-1/2 flex flex-col justify-center gap-5">
                    <h1 className="text-3xl font-semibold">Sobre o evento</h1>
                    <p>O conexão Tech é um evento pensado para reunir profissionais e estudantes da tecnologia em um dia de muito aprendizado, troca de experiências e networking.</p>
                    <p>Aqui, você vai encontrar palestras inspiradoras, conhecer pessoas incríveis e descobrir novas perspectivas sobre o futuro da tecnologia.</p>
                    <div className="flex flex-col sm:flex-row gap-10 my-12">
                        <Infografico icone={UsersRound} titulo={"Palestras com especialistas"} black={true} />
                        <Infografico icone={UserStar} titulo={"Networking qualificado"} black={true} />
                        <Infografico icone={Coffee} titulo={"Coffe break"} black={true} />
                    </div>
                </div>
                <img src={ImgSobre} alt="" className="w-90 h-100 object-cover rounded-2xl hidden xl:block" />
            </section >

            <section className="px-10 md:px-24 xl:px-36 my-20 flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl font-semibold">Palestrantes</h1>
                </div>
                <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-4 gap-6">
                    {palestrantes.map((p) => (
                        <CardPalestrante key={p.nome} {...p} />
                    ))}
                </div>
            </section>

            <section className="px-10 md:px-24 xl:px-36 mb-20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 rounded-2xl bg-gray-900 text-white">
                    <div className="flex items-center gap-4">
                        <UsersRound size={40} strokeWidth={1.5} className="shrink-0" />
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-semibold">+0 inscritos</h1>
                            <p className="text-gray-400">Veja quem já garantiu presença no evento.</p>
                        </div>
                    </div>
                    <ButtonRedirect placeholder={"Ver inscritos"} destino={"/inscritos"} />
                </div>
            </section>

            <Footer />
        </div >
    )
}

export default HomePage;
