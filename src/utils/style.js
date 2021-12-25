import styled from "@emotion/styled";
import { Chip } from "@mui/material";

export const StyledPokemonChip = styled(Chip)(
    ({ typecolor = "gray", textcolor = "#fff" }) => ({
      background: typecolor,
      color: textcolor,
      fontFamily: "Flexo-Medium,arial,sans-serif",
      borderRadius: "3px",
      lineHeight: "18px",
      maxWidth: "110px",
      margin: "0 1.5625% 0 0",
      width: "38.4375%",
      float: "left",
      textTransform: "none",
      textAlign: "center",
    })
  );
  