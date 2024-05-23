import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import Contact from "./pages/contact";
import {Carousel} from "./pages/Carousel/Carousel"


function AppRoutes() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/contact" element={ <Contact /> }></Route>
                <Route path="/Carousel" element={ <Carousel /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;