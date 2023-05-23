import React from "react";
import { Box, Grid } from "@mui/material";
import { stats } from "../../../../data/pokemonConstants";

export default function StatsSection({ pokemonData }) {
    return (
        <div className="big-card-section-3">
            <Box className="big-card-pokemon-stats-container">
                <Grid container spacing={2} className="big-card-pokemon-stats">
                    {stats.map((stat, index) => {
                        return (
                            <Grid
                                item
                                xs={4}
                                className="big-card-pokemon-stat"
                                key={stat}
                            >
                                <p className="stat">{stat}</p>
                                <p className="stat-value">
                                    {pokemonData.stats[index].base_stat}
                                </p>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </div>
    );
}
