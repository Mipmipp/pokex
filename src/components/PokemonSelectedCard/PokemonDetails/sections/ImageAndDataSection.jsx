import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import StarsIcon from "@mui/icons-material/Stars";
import { convertPokemonUnit } from "../../../../utils/convertPokemonUnit";

export default function ImageAndDataSection({
    pokemonData,
    pokemonView,
    pokemonVariant,
    setPokemonView,
    setPokemonVariant,
}) {
    const pokemonSpriteUrl =
        pokemonData.sprites.versions["generation-v"]["black-white"][
            `${pokemonView}_${pokemonVariant}`
        ];

    return (
        <div className="big-card-section-1">
            <div className="big-card-image-and-data">
                <div className="big-card-data">
                    <div className="big-card-pokemon-id">
                        <p>N°{pokemonData.id}</p>
                    </div>
                    <div className="big-card-pokemon-weight">
                        <p>{convertPokemonUnit(pokemonData.weight)}kg</p>
                    </div>
                    <div className="big-card-pokemon-height">
                        <p>{convertPokemonUnit(pokemonData.height)}m</p>
                    </div>
                </div>
                <div className="big-card-image-container">
                    <div
                        className="big-card-image"
                        style={{
                            backgroundImage: `url(${pokemonSpriteUrl})`,
                        }}
                    ></div>
                </div>
            </div>
            <div className="big-card-buttons">
                <Tooltip title="rotate">
                    <IconButton
                        className="big-card-rotate-button-container"
                        onClick={() =>
                            pokemonView === "front"
                                ? setPokemonView("back")
                                : setPokemonView("front")
                        }
                    >
                        <CameraswitchIcon className="big-card-rotate-button" />
                    </IconButton>
                </Tooltip>
                <Tooltip
                    title={
                        pokemonVariant === "default"
                            ? "change to shiny"
                            : "change to default"
                    }
                >
                    <IconButton
                        className="big-card-shiny-button-container"
                        onClick={() =>
                            pokemonVariant === "default"
                                ? setPokemonVariant("shiny")
                                : setPokemonVariant("default")
                        }
                    >
                        <StarsIcon className="big-card-shiny-button" />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    );
}
