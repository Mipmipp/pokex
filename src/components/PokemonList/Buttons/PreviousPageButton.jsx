import React, { useContext } from "react";
import { Tooltip, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import RemoveIcon from "@mui/icons-material/Remove";
import { PokedexContext } from "../../../hooks/PokedexContext";
import "./Buttons.css";

export default function PreviousPageButton(props) {
    const { pageValue } = useContext(PokedexContext);
    const [currentPage, setCurrentPage] = pageValue;

    return (
        <Tooltip
            title={
                props.previousPage != null
                    ? "Previous page"
                    : "There is not previous page"
            }
        >
            <span>
                <IconButton
                    disabled={props.disabled}
                    className={
                        props.previousPage != null ? "button" : "error-button"
                    }
                    onClick={() =>
                        props.previousPage != null
                            ? setCurrentPage(props.previousPage)
                            : console.error("Cant change page")
                    }
                >
                    {props.previousPage != null ? (
                        <NavigateBeforeIcon />
                    ) : (
                        <RemoveIcon />
                    )}
                </IconButton>
            </span>
        </Tooltip>
    );
}
