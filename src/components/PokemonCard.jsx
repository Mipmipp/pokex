import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./PokemonCard.css";

const PokemonCard = ({ urlPokemonClicked }) => {
   const [pokemonData, setPokemonData] = useState([]);
   const [flavorText, setFlavorText] = useState("");
   const [secondFetchDone, setSecondFetchDone] = useState(false);

   const getPokemonClickedData = async () => {
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

   const stats = [
      "HP",
      "Attack",
      "Defense",
      "Special Attack",
      "Special Defense",
      "Speed",
   ];
   const { status } = useQuery(["pokemon"], getPokemonClickedData);

   const { flavor } = useQuery(["flavorText"], getAFlavorText);

   useEffect(() => {
      getPokemonClickedData();
   }, [urlPokemonClicked]);

   return secondFetchDone === false ? null : (
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
                  <Col xs={4}>Height: {(pokemonData.height * 10) / 100}m</Col>
                  <Col xs={4}>Weight: {pokemonData.weight / 10}kg</Col>
               </Row>
            </Card.Header>
            <Card.Body>
               <Card.Text>{flavorText}</Card.Text>
               <hr></hr>
               <Container>
                  <Row>
                     {stats.map((value, index) => {
                        return (
                           <Col xs={6} sm={4} key={value}>
                              {value} <br></br>
                              {pokemonData.stats[index].base_stat}
                           </Col>
                        );
                     })}
                  </Row>
               </Container>
            </Card.Body>
         </Card>
      </div>
   );
};

export default PokemonCard;
