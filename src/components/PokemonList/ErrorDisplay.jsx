import React from "react";
import pokemonError from "../../assets/pokemon-error.gif";

export default function ErrorDisplay({ error }) {
    console.error(error);
    return (
        <div className="container-error">
            <img className="image-error" src={pokemonError} alt="Error" />
            <p className="message-error">
                An error occurred. Please check your internet connection and try
                again.
            </p>
        </div>
    );
}
