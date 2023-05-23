import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import ModeSwitcher from "./ModeSwitcher";
import "./NavBar.css";

export default function ControllableStates() {
    return (
        <AppBar component="nav" className="nav">
            <Box className="container-nav">
                <Toolbar className="toolbar-nav">
                    <Box className="title-nav">
                        <p>Catch 'Em All!</p>
                    </Box>
                    <Box className="utilities-nav">
                        <SearchBar />
                        <ModeSwitcher />
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    );
}
