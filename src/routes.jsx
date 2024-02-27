import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index'
import Sobre from './pages/Sobre/index'
import Projetos from './pages/Projetos/index'
import Contato from './pages/Contato/index'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>
                <Route path="/projetos" element={<Projetos/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes 