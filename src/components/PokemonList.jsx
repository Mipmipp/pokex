import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Row from "react-bootstrap/Row";
import PokemonOfList from "./PokemonOfList";
import PokemonCard from "./PokemonCard";
import ButtonLeft from "./small-components/ButtonLeft";
import ButtonRight from "./small-components/ButtonRight";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "./PokemonList.css";

const PokemonList = () => {
   const [pokemons, setPokemons] = useState([]);
   const [actualPage, setActualPage] = useState(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=16"
   );
   const [pokemonClicked, setPokemonClicked] = useState(
      "https://pokeapi.co/api/v2/pokemon/1/"
   );
   const [previous, setPrevious] = useState("");
   const [next, setNext] = useState("");
   const [variantButtonLeft, setVariantButtonLeft] = useState("dark");
   const [variantButtonRight, setVariantButtonRight] = useState("dark");
};

export default PokemonList;
