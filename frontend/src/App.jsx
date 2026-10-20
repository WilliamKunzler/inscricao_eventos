import { BrowserRouter } from "react-router";
import AppRoutes from "./routes.jsx"

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <main className="flex-1">
                    <AppRoutes />
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;
