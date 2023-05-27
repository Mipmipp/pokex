import React from "react";
import { Box, Grid } from "@mui/material";
import PreviousPageButton from "./Buttons/PreviousPageButton";
import NextPageButton from "./Buttons/NextPageButton";
import PokemonCardLoading from "../PokemonCard/PokemonCardLoading";
import "./PokemonList.css";

export default function LoadingPokemons({ totalPokemonsList }) {
    return (
        <Box className="box-container">
            <Grid container spacing={2} className="pokemon-list">
                {Array.from({ length: totalPokemonsList }, (_, index) => (
                    <Grid
                        item
                        xs={6}
                        sm={4}
                        md={3}
                        className="pokemon-of-list"
                        key={index}
                    >
                        <PokemonCardLoading key={`loading-${index}`} />
                    </Grid>
                ))}
            </Grid>
            <Box className="buttons-container">
                <PreviousPageButton disabled={true} />
                <NextPageButton disabled={true} />
            </Box>
        </Box>
    );
}
