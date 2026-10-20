import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router"

function ButtonRedirect({ placeholder, destino }) {
    const navigate = useNavigate()

    const acao = () => {
        navigate(destino)
    }

    return (
        <div onClick={acao} className="flex text-white bg-purple-700 py-3 px-6 rounded-3xl items-center gap-2 cursor-pointer group">
            <h1 className="font-semibold">{placeholder}</h1>
            <ArrowRight size={16} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </div>
    )
}

export default ButtonRedirect;
