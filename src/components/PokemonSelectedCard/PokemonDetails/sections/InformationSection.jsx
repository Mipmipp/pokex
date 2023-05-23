import React from "react";
import { pokemonTypes } from "../../../../data/pokemonTypes";
import { convertFlavorText } from "../../../../utils/convertFlavorText";

export default function InformationSection({ pokemonData, flavorTextData }) {
    const pokemonDescription = convertFlavorText(flavorTextData);

    return (
        <div className="big-card-section-2">
            <div className="big-card-information">
                <h1 className="big-card-pokemon-name">{pokemonData.name}</h1>
                <p className="big-card-pokemon-description">
                    {pokemonDescription}
                </p>
            </div>
            <div className="big-card-pokemon-types">
                {pokemonData.types.map((type) => {
                    const background = pokemonTypes[type.type.name];

                    return (
                        <div
                            className="big-card-pokemon-type"
                            key={type.type.name}
                            style={{
                                backgroundColor: background,
                            }}
                        >
                            <p>{type.type.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
