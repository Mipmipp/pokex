import React from "react";
import pokemonErrorGif from "../../assets/pokemon-error.gif";

export default function PokemonError({ error }) {
    console.error(error);
    return (
        <div className="error-pokemon-selected">
            <img src={pokemonErrorGif} alt="Error" />
            <p>Oops! Something went wrong. Please try again.</p>
        </div>
    );
}
