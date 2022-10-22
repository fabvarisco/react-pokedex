import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  height: "90%",
  width: "70%",
  textAlign: "center",
  backgroundImage: `url(../../public/body_bg.png)`,
  borderRadius: 10,
}));

export const StyledPokemonNumber = styled("div")(`
font-family: "Flexo-Bold",arial,sans-serif;
color: #919191;
font-weight: bold;
`);

export const StyledHeader = styled("div")(
  ({ typecolor }) => `
background: linear-gradient(180deg, ${typecolor} 10%, transparent);
border-radius: 10px;
`
);
