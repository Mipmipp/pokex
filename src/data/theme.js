import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primaryBackground: {
                    main: "#171822",
                },
                secondaryBackground: {
                    main: "#FFFFFF",
                },
                primarySurface: {
                    main: "#FBFBFA",
                },
                secondarySurface: {
                    main: "#F1F1F0",
                },
                primaryText: {
                    main: "#37352f",
                },
                secondaryText: {
                    main: "#37352f",
                },
                textHover: {
                    main: "#87834E26",
                },
                buttonBackground: {
                    main: "#171822",
                },
                buttonColor: {
                    main: "#DDD",
                },
                buttonErrorBackground: {
                    main: "#bb2f2f",
                },
                purple: {
                    main: "#bd8ccb",
                },
                green: {
                    main: "#9fc0a3",
                },
                blue: {
                    main: "#dde4eb",
                },
                gray: {
                    main: "#D3D3D3",
                }
            },
        },
        dark: {
            palette: {
                primaryBackground: {
                    main: "#191919",
                },
                secondaryBackground: {
                    main: "#1c1c1d",
                },
                primarySurface: {
                    main: "#2C2C2C",
                },
                secondarySurface: {
                    main: "#202020",
                },
                primaryText: {
                    main: "#D5D5D5",
                },
                secondaryText: {
                    main: "#2C2C2C",
                },
                textHover: {
                    main: "2C2C2C",
                },
                buttonBackground: {
                    main: "#191919",
                },
                buttonColor: {
                    main: "#999696",
                },
                buttonErrorBackground: {
                    main: "#8c1717",
                },
                purple: {
                main: "#7d6a9c",
                },
                green: {
                main: "#6b8c73",
                },
                blue: {
                main: "#a9b4c0",
                },
                gray: {
                main: "#9c9c9c",
                },                  
            },
        },
    },
});
