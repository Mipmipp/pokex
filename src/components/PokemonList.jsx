import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Row, Spinner, Alert } from "react-bootstrap";
import PokemonOfList from "./PokemonOfList";
import PokemonCard from "./PokemonCard";
import ButtonLeft from "./small-components/ButtonLeft";
import ButtonRight from "./small-components/ButtonRight";
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

   const getApiData = async () => {
      try {
         const response = await fetch(actualPage);
         if (response.ok) {
            const data = await response.json();
            manageApiData(data);
         }
      } catch (error) {
         console.log(error);
      }
   };

   const { error, isLoading } = useQuery(["pokemonList"], getApiData);

   function manageApiData(data) {
      setPokemons(data.results);
      setPrevious(data.previous);
      setNext(data.next);
   }

   function managePreviousPage() {
      if (previous === null) {
         setVariantButtonLeft("danger");
      } else {
         setActualPage(previous);
      }
   }

   function manageNextPage() {
      if (next === null) {
         setVariantButtonRight("danger");
      } else {
         setActualPage(next);
      }
   }

   useEffect(() => {
      getApiData();
      setVariantButtonRight("dark");
      setVariantButtonLeft("dark");
   }, [actualPage]);

   if (isLoading) {
      return (
         <div className="loading">
            <Spinner animation="grow" variant="light" />
         </div>
      );
   }

   if (error) {
      return (
         <div className="error">
            <Alert variant="danger">
               An error happened. Please try to restart the page and be
               connected to wifi.
            </Alert>
         </div>
      );
   }

   return (
      <div>
         <PokemonCard urlPokemonClicked={pokemonClicked} />
         <div className="div-list">
            <Row className="pokemon-list">
               {pokemons.map((pokemon) => {
                  return (
                     <PokemonOfList
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                        pokemonClicked={() => setPokemonClicked(pokemon.url)}
                     />
                  );
               })}
            </Row>
            <div className="buttons">
               <ButtonLeft
                  onClickEvent={() => managePreviousPage()}
                  variant={variantButtonLeft}
               />
               <ButtonRight
                  onClickEvent={() => manageNextPage()}
                  variant={variantButtonRight}
               />
            </div>
         </div>
      </div>
   );
};

export default PokemonList;
