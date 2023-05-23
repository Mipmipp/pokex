import React, { useState } from "react";
import { PokedexContext } from "./PokedexContext";
import {
    FIRST_POKEMON_ENDPOINT,
    FIRST_PAGE_ENDPOINT,
    POKEMON_FLAVOR_TEXT_ENDPOINT,
} from "../data/endpoints";

export const PokedexProvider = (props) => {
    const [currentPokemon, setCurrentPokemon] = useState(
        FIRST_POKEMON_ENDPOINT
    );
    const [currentPage, setCurrentPage] = useState(FIRST_PAGE_ENDPOINT);
    const [currentFlavor, setCurrentFlavor] = useState(
        POKEMON_FLAVOR_TEXT_ENDPOINT
    );

    return (
        <PokedexContext.Provider
            value={{
                pageValue: [currentPage, setCurrentPage],
                pokemonValue: [currentPokemon, setCurrentPokemon],
                flavorValue: [currentFlavor, setCurrentFlavor],
            }}
        >
            {props.children}
        </PokedexContext.Provider>
    );
};
