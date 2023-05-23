import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { PokedexContext } from "../../hooks/PokedexContext";
import { ALL_POKEMONS_ENDPOINT } from "../../data/endpoints";
import { usePosts } from "../../hooks/usePosts";
import { getAllPokemonsName } from "../../utils/getAllPokemonsName";
import "./SearchBar.css";

export default function ControllableStates() {
    const { pokemonValue } = useContext(PokedexContext);
    const [currentPokemon, setCurrentPokemon] = pokemonValue;
    const [value, setValue] = useState(null);

    const { data, isLoading, error } = usePosts(ALL_POKEMONS_ENDPOINT);

    if (isLoading) {
        return <p className="title-nav">loading...</p>;
    }

    if (error) console.error(error);

    if (data) {
        const pokemons = getAllPokemonsName(data);

        return (
            <Autocomplete
                id="search-bar"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    newValue != null
                        ? setCurrentPokemon(
                              `https://pokeapi.co/api/v2/pokemon/${newValue}/`
                          )
                        : console.log("Invalid input");
                }}
                options={pokemons}
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="search pokemon"
                        size="small"
                    />
                )}
            />
        );
    }
}
