export function getAllPokemonsName(data) {
    const pokemonsData = data.results;
    let pokemonsNameList = [];

    pokemonsData.map((pokemon) =>
        pokemonsNameList.push(pokemon.name)
    )

    return pokemonsNameList
}
