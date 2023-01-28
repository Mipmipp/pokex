import React from "react";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion/dist/framer-motion";
import "./ButtonRight.css";

function ButtonRight({ onClickEvent, variant, styles }) {
   return (
      <motion.div
         className="button-div"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
      >
         <Button
            variant={variant}
            id="button-right"
            onClick={onClickEvent}
         ></Button>
      </motion.div>
   );
}

export default ButtonRight;
