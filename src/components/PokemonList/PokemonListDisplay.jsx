import React from "react";
import { Box, Grid } from "@mui/material";
import PreviousPageButton from "./Buttons/PreviousPageButton";
import NextPageButton from "./Buttons/NextPageButton";
import PokemonCard from "../PokemonCard/PokemonCard";
import { POKEMON_PICTURE_ENDPOINT } from "../../data/endpoints";
import { getPokemonID } from "../../utils/getPokemonID";
import "./PokemonList.css";

export default function PokemonListDisplay({
    pokemons,
    previousPage,
    nextPage,
}) {
    return (
        <Box className="box-container">
            <Grid container spacing={2} className="pokemon-list">
                {pokemons.map((pokemon, index) => {
                    const POKEMON_ID = getPokemonID(pokemon.url);

                    return (
                        <Grid
                            item
                            xs={3}
                            key={`grid-${index}`}
                            className="pokemon-of-list"
                        >
                            <PokemonCard
                                name={pokemon.name}
                                image={`${POKEMON_PICTURE_ENDPOINT}${POKEMON_ID}.png`}
                                url={pokemon.url}
                                key={`pokemon-${index}`}
                            />
                        </Grid>
                    );
                })}
            </Grid>
            <Box className="buttons-container">
                <PreviousPageButton previousPage={previousPage} />
                <NextPageButton nextPage={nextPage} />
            </Box>
        </Box>
    );
}
