import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import pokeballLoading from "../../assets/pokeball-loading.gif";
import "./PokemonCard.css";

export default function PokemonCardLoading() {
    return (
        <Card className="pokemon-card">
            <CardMedia
                className="pokemon-card-image"
                component="img"
                alt="loading"
                image={pokeballLoading}
            />
            <CardContent className="pokemon-card-text-container">
                <h4 className="pokemon-card-name">loading</h4>
            </CardContent>
        </Card>
    );
}
