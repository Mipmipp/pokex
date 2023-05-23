import React, { useContext } from "react";
import { Tooltip, IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import RemoveIcon from "@mui/icons-material/Remove";
import { PokedexContext } from "../../../hooks/PokedexContext";
import "./Buttons.css";

export default function NextPageButton(props) {
    const { pageValue } = useContext(PokedexContext);
    const [currentPage, setCurrentPage] = pageValue;

    return (
        <Tooltip
            title={
                props.nextPage != null ? "Next page" : "There is not next page"
            }
        >
            <span>
                {" "}
                <IconButton
                    disabled={props.disabled}
                    className={
                        props.nextPage != null ? "button" : "error-button"
                    }
                    onClick={() =>
                        props.nextPage != null
                            ? setCurrentPage(props.nextPage)
                            : console.error("Cant change page")
                    }
                >
                    {props.nextPage != null ? (
                        <NavigateNextIcon />
                    ) : (
                        <RemoveIcon className="error-button" />
                    )}
                </IconButton>
            </span>
        </Tooltip>
    );
}
