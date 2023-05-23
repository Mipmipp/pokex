import React, { useState, useContext } from "react";
import { PokedexContext } from "../../hooks/PokedexContext";
import { usePosts } from "../../hooks/usePosts";
import PokemonLoading from "./PokemonLoading";
import PokemonError from "./PokemonError";
import PokemonDetails from "./PokemonDetails/PokemonDetails";
import "./PokemonSelectedCard.css";

export default function PokemonSelectedCard() {
    const { pokemonValue, flavorValue } = useContext(PokedexContext);
    const [currentPokemon] = pokemonValue;
    const [currentFlavor] = flavorValue;
    const [pokemonView, setPokemonView] = useState("front");
    const [pokemonVariant, setPokemonVariant] = useState("default");

    const {
        data: pokemonData,
        isLoading: isPokemonLoading,
        error: pokemonError,
    } = usePosts(currentPokemon);

    const {
        data: flavorTextData,
        isLoading: isFlavorTextLoading,
        error: flavorTextError,
    } = usePosts(currentFlavor);

    if (isPokemonLoading || isFlavorTextLoading) {
        return <PokemonLoading />;
    }

    if (pokemonError || flavorTextError) {
        return <PokemonError error={pokemonError || flavorTextError} />;
    }

    if (pokemonData || flavorTextData) {
        return (
            <PokemonDetails
                pokemonData={pokemonData}
                flavorTextData={flavorTextData}
                pokemonView={pokemonView}
                pokemonVariant={pokemonVariant}
                setPokemonView={setPokemonView}
                setPokemonVariant={setPokemonVariant}
            />
        );
    }
}
