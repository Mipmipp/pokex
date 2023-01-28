import React from "react";
import { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { motion } from "framer-motion/dist/framer-motion";
import "./PokemonOfList.css";

const PokemonOfList = ({ name, url, pokemonClicked }) => {
   const [pokemonID] = useState(`${url.split("/")[6]}`);

   return (
      <Col className="pokemon-body" xs={6} sm={3}>
         <Card
            className="pokemon"
            border="dark"
            onClick={pokemonClicked}
            title={name}
         >
            <Card.Img
               className="pokemon-image"
               variant="top"
               alt={name}
               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
            />
            <Card.Body className="pokemon-of-list-body">
               <Card.Title className="pokemon-name">{name}</Card.Title>
            </Card.Body>
         </Card>
      </Col>
   );
};

export default PokemonOfList;
