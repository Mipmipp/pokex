import React from "react";
import ImageAndDataSection from "./sections/ImageAndDataSection";
import InformationSection from "./sections/InformationSection";
import StatsSection from "./sections/StatsSection";
import ChartSection from "./sections/ChartSection";

export default function PokemonDetails({
    pokemonData,
    flavorTextData,
    pokemonView,
    pokemonVariant,
    setPokemonView,
    setPokemonVariant,
}) {
    return (
        <div className="big-card-pokemon">
            <ImageAndDataSection
                pokemonData={pokemonData}
                pokemonView={pokemonView}
                pokemonVariant={pokemonVariant}
                setPokemonView={setPokemonView}
                setPokemonVariant={setPokemonVariant}
            />
            <InformationSection
                pokemonData={pokemonData}
                flavorTextData={flavorTextData}
            />
            <StatsSection pokemonData={pokemonData} />
            <ChartSection pokemonData={pokemonData} />
        </div>
    );
}
