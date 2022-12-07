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

   if (secondFetchDone === false) {
      return;
   } else {
      return (
         <div className="card-pokemon-div">
            <Card border="dark" className="card-pokemon">
               <Card.Header>{pokemonData.name}</Card.Header>
               <div className="div-card-header">
                  <Card.Img
                     variant="bottom"
                     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
                  />
               </div>

               <Card.Header className="second-card-header">
                  <Row className="information">
                     <Col xs={4}>ID°{pokemonData.id}</Col>
                     <Col xs={4}>
                        Height: {(pokemonData.height * 10) / 100}m
                     </Col>
                     <Col xs={4}>Weight: {pokemonData.weight / 10}kg</Col>
                  </Row>
               </Card.Header>
               <Card.Body>
                  <Card.Text>{flavorText}</Card.Text>
                  <hr></hr>
                  <Container>
                     <Row>
                        <Col xs={6} sm={4}>
                           HP <br></br>
                           {pokemonData.stats[0].base_stat}
                        </Col>
                        <Col xs={6} sm={4}>
                           Attack <br></br>
                           {pokemonData.stats[1].base_stat}
                        </Col>
                        <Col xs={6} sm={4}>
                           Defense <br></br>
                           {pokemonData.stats[2].base_stat}
                        </Col>
                        <Col xs={6} sm={4}>
                           special-attack <br></br>
                           {pokemonData.stats[3].base_stat}
                        </Col>
                        <Col xs={6} sm={4}>
                           Special-defense <br></br>
                           {pokemonData.stats[4].base_stat}
                        </Col>
                        <Col xs={6} sm={4}>
                           Speed <br></br>
                           {pokemonData.stats[5].base_stat}
                        </Col>
                     </Row>
                  </Container>
               </Card.Body>
            </Card>
         </div>
      );
   }
};

export default PokemonCard;
