import React from "react";
import { VictoryPolarAxis, VictoryBar, VictoryChart } from "victory";
import { stats } from "../../../../data/pokemonConstants";

export default function ChartSection({ pokemonData }) {
    const dataStats = [
        { stat: "HP", value: pokemonData.stats[0].base_stat },
        { stat: "Attack", value: pokemonData.stats[1].base_stat },
        { stat: "Defense", value: pokemonData.stats[2].base_stat },
        { stat: "Special Attack", value: pokemonData.stats[3].base_stat },
        { stat: "Special Defense", value: pokemonData.stats[4].base_stat },
        { stat: "Speed", value: pokemonData.stats[5].base_stat },
    ];

    return (
        <div className="big-card-section-4">
            <div>
                <VictoryChart polar>
                    {stats.map((stat) => {
                        return (
                            <VictoryPolarAxis
                                dependentAxis
                                className="big-card-pokemon-chart"
                                key={stat}
                                label={stat}
                                labelPlacement="perpendicular"
                                style={{
                                    tickLabels: { fill: "none" },
                                }}
                                axisValue={stat}
                            />
                        );
                    })}
                    <VictoryBar
                        style={{
                            data: {
                                fill: "var(--mui-palette-purple-main)",
                                width: 25,
                            },
                        }}
                        data={dataStats}
                        x="stat"
                        y="value"
                    />
                </VictoryChart>
            </div>
        </div>
    );
}
