import React from "react";
import { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { motion } from "framer-motion/dist/framer-motion";
import "./PokemonOfList.css";

const variants = {
   hidden: {
      opacity: 0.4
   },
   visible: {
      opacity: 1,
      transition: {
         duration: 2
      }
   }
}

const PokemonOfList = ({ name, url, pokemonClicked }) => {
   const [pokemonID] = useState(`${url.split("/")[6]}`);

   return (
      <Col className="pokemon-body" xs={6} sm={3}>
         <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
         >
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
         </motion.div>
      </Col>
   );
};

export default PokemonOfList;
