import React from "react";
import { theme } from "../data/theme.js";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { PokedexProvider } from "../hooks/PokedexProvider.jsx";
import { Main } from "./Main/Main.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import Footer from "./Footer/Footer.jsx";

const App = () => {
    return (
        <CssVarsProvider theme={theme}>
            <PokedexProvider>
                <NavBar />
                <Main />
                <Footer />
            </PokedexProvider>
        </CssVarsProvider>
    );
};

export default App;
