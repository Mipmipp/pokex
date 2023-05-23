import React from "react";
import pokemonLoading from "../../assets/pokemon-loading.gif";

export default function PokemonLoading() {
    return (
        <div className="loading-pokemon-selected">
            <img src={pokemonLoading} alt="Loading" />
            <p>Capturing Pokemon...</p>
        </div>
    );
}
