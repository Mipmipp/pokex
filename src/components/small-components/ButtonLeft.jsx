import React from "react";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion/dist/framer-motion";
import "./ButtonLeft.css";

function ButtonLeft({ onClickEvent, variant }) {
   return (
      <Button
         variant={variant}
         id="button-left"
         onClick={onClickEvent}
      ></Button>
   );
}

export default ButtonLeft;
