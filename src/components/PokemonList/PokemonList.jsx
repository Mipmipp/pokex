import React, { useContext } from "react";
import { PokedexContext } from "../../hooks/PokedexContext";
import { usePosts } from "../../hooks/usePosts";
import LoadingPokemons from "./LoadingPokemons";
import ErrorDisplay from "./ErrorDisplay";
import PokemonListDisplay from "./PokemonListDisplay";

export default function PokemonList() {
    const { pageValue } = useContext(PokedexContext);
    const [currentPage] = pageValue;

    const { data, isLoading, error } = usePosts(currentPage);

    if (isLoading) {
        const totalPokemonsList = 12;
        return <LoadingPokemons totalPokemonsList={totalPokemonsList} />;
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    if (data) {
        const {
            results: pokemons,
            previous: previousPage,
            next: nextPage,
        } = data;
        return (
            <PokemonListDisplay
                pokemons={pokemons}
                previousPage={previousPage}
                nextPage={nextPage}
            />
        );
    }
}
