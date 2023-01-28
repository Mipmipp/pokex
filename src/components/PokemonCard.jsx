import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./PokemonCard.css";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const variants = {
   hidden: {
      scale: 0
   },
   visible: {
      scale: 1,
      transition: {
         duration: 1.5
      }
   },
}

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
      <AnimatePresence>
      <motion.div
         key={urlPokemonClicked}
         className="card-pokemon-div"
         initial='hidden'
         animate='visible'
         exit='hidden'
         variants={variants}
      >
         <Card border="dark" className="card-pokemon">
            <Card.Header>
               <motion.div
                  whileHover={{ scale: 1.3 }}
               >
               {pokemonData.name}
               </motion.div>
            </Card.Header>
            <div className="div-card-header">
               <motion.div
                  className='motion-div'
                  whileHover={{ scale: 1.5 }}
               >
                  <Card.Img
                     variant="bottom"
                     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
                  />
               </motion.div>
            </div>
            <Card.Header className="second-card-header">
               <Row className="information">
                  <Col xs={4}>
                     <motion.div
                        className='motion-div'
                        whileHover={{ scale: 1.1 }}
                     >
                        ID°{pokemonData.id}
                     </motion.div>
                  </Col>
                  <Col xs={4}>
                     <motion.div
                        className='motion-div'
                        whileHover={{ scale: 1.1 }}
                     >
                        Height: {(pokemonData.height * 10) / 100}m
                     </motion.div>
                  </Col>
                  <Col xs={4}>
                     <motion.div
                        className='motion-div'
                        whileHover={{ scale: 1.1 }}
                     >
                        Weight: {pokemonData.weight / 10}kg
                     </motion.div>
                  </Col>
               </Row>
            </Card.Header>
            <Card.Body>
               <motion.div
                     className='motion-div'
                     whileHover={{ scale: 1.04 }}
                  >
                     <Card.Text>{flavorText}</Card.Text>
               </motion.div>
               <hr></hr>
               <Container>
                  <Row>
                     {stats.map((value, index) => {
                        return (
                           <Col xs={6} sm={4} key={value}>
                              <motion.div
                                 className='motion-div'
                                 whileHover={{ scale: 1.2 }}
                              >
                                 {value} <br></br>
                                 {pokemonData.stats[index].base_stat}
                              </motion.div>
                           </Col>
                        );
                     })}
                  </Row>
               </Container>
            </Card.Body>
         </Card>
      </motion.div>
      </AnimatePresence>
   );
};

export default PokemonCard;
