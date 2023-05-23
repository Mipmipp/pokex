import React, { useContext } from "react";
import { Card, CardContent, CardMedia, Tooltip } from "@mui/material";
import { PokedexContext } from "../../hooks/PokedexContext";
import "./PokemonCard.css";

export default function PokemonCard(props) {
    const { pokemonValue, flavorValue } = useContext(PokedexContext);
    const [currentPokemon, setCurrentPokemon] = pokemonValue;
    // eslint-disable-next-line
    const [currentFlavor, setCurrentFlavor] = flavorValue;

    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${props.name}/`;
    const pokemonFlavorURL = `https://pokeapi.co/api/v2/pokemon-species/${props.name}/`;

    return (
        <Tooltip title={props.name}>
            <Card
                className={
                    currentPokemon === pokemonURL
                        ? "pokemon-selected-card"
                        : "pokemon-card"
                }
                onClick={() => {
                    setCurrentPokemon(pokemonURL);
                    setCurrentFlavor(pokemonFlavorURL);
                }}
            >
                <CardMedia
                    className="pokemon-card-image"
                    component="img"
                    alt={props.name}
                    image={props.image}
                />
                <CardContent className="pokemon-card-text-container">
                    <h4 className="pokemon-card-name">{props.name}</h4>
                </CardContent>
            </Card>
        </Tooltip>
    );
}
