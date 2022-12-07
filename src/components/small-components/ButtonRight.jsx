import React from "react";
import Button from "react-bootstrap/Button";
import "./ButtonRight.css";

function ButtonRight({ onClickEvent, variant, styles }) {
   return (
      <Button
         variant={variant}
         id="button-right"
         onClick={onClickEvent}
      ></Button>
   );
}

export default ButtonRight;
