import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./PokemonCard.css";

const PokemonCard = ({ urlPokemonClicked }) => {
   const [pokemonData, setPokemonData] = useState([]);
   const [flavorText, setFlavorText] = useState("");
   const [secondFetchDone, setSecondFetchDone] = useState(false);

   const getApiData = async () => {
      try {
         const response = await fetch(urlPokemonClicked);
         if (response.ok) {
            const data = await response.json();
            setPokemonData(data);
            getAFlavorText();
         }
      } catch (error) {
         console.log(error);
      }
   };

   const getAFlavorText = async () => {
      try {
         const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${
               urlPokemonClicked.split("/")[6]
            }`
         );
         if (response.ok) {
            const data = await response.json();
            // data is an object with lots of flavor text entries. After that, texts with the language 'en' are filtered.
            const fileterdFlavorTextEntries = data.flavor_text_entries.filter(
               (element) => element.language.name === "en"
            );
            // this choose the first object with 'en' language.
            // the text is made for Nintendo Pokemon ROMs, so it is edited to contain no weird symbols like arrows
            setFlavorText(
               fileterdFlavorTextEntries[0].flavor_text
                  .replace("\f", "\n")
                  .toLowerCase()
            );
            setSecondFetchDone(true);
         }
      } catch (error) {
         console.log(error);
      }
   };

   const { status } = useQuery(["pokemon"], getApiData);

   const { flavor } = useQuery(["flavorText"], getAFlavorText);

   useEffect(() => {
      getApiData();
   }, [urlPokemonClicked]);

   }
};

export default PokemonCard;
