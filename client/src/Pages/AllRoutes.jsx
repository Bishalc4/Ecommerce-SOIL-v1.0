import { Route, Routes } from "react-router-dom"
import { Home, Specials, DietNutrition, GrowItYourself, About, Login, NotFound} from "./index"

function AllRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/growityourself" element={<GrowItYourself />} />
            <Route path="/dietnutrition" element={<DietNutrition />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AllRoutes;