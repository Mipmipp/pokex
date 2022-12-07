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
   }
};

export default PokemonCard;
