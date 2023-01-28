import React from "react";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion/dist/framer-motion";
import "./ButtonLeft.css";

function ButtonLeft({ onClickEvent, variant }) {
   return (
      <motion.div
         className="button-div"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
      >
         <Button
            variant={variant}
            id="button-left"
            onClick={onClickEvent}
         ></Button>
      </motion.div>
   );
}

export default ButtonLeft;
