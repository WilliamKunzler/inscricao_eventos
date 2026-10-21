import { BrowserRouter } from "react-router";
import AppRoutes from "./routes.jsx"
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
                <main className="flex-1">
                    <AppRoutes />
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;
