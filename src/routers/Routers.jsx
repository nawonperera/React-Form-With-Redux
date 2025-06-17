import {Route, Routes} from "react-router";
import Home from "../Components/Home/Home.jsx";

const Routers = () => {
    return (
        <Routes path="/*">
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default Routers;