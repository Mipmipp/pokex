import React from "react";
import PokemonSelectedCard from "../PokemonSelectedCard/PokemonSelectedCard";
import PokemonList from "../PokemonList/PokemonList";
import "./Main.css";

export const Main = () => {
    return (
        <div className="main-layout">
            <div className="card-layout">
                <PokemonSelectedCard />
            </div>
            <div className="list-layout">
                <PokemonList />
            </div>
        </div>
    );
};
