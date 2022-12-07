import React from "react";
import Header from "./Header";
import PokemonList from "./PokemonList";
import Footer from "./Footer";

const Pokedex = () => {
   return (
      <>
         <Header />
         <PokemonList />;
         <Footer />
      </>
   );
};

export default Pokedex;
