import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ModeSwitcher() {
    const { mode, setMode } = useColorScheme();

    return (
        <Tooltip title="Change theme">
            <IconButton
                className="change-theme-button"
                onClick={() => {
                    if (mode === "light") {
                        setMode("dark");
                    } else {
                        setMode("light");
                    }
                }}
            >
                {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </Tooltip>
    );
}
