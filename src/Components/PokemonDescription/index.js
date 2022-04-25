import { Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef, useImperativeHandle, useState } from "react";
import {
  getPokemonEvolution,
  pokemonColorStyle,
  pokemonTypeStyle,
} from "../../utils/utils";
import { StyledBox, StyledHeader, StyledPokemonNumber } from "./style";

function PokemonDescription({}, ref) {
  const [visible, setVisible] = useState(false);
  const [
    {
      num,
      name,
      img,
      type,
      id,
      weaknesses,
      next_evolution,
      prev_evolution,
      height,
      weight,
    },
    setPokemon,
  ] = useState({
    type: [],
  });

  function handleControllPokemonDescription() {
    setVisible(!visible);
  }

  useImperativeHandle(
    ref,
    () => ({
      handleControllPokemonDescription,
      setPokemon,
    }),
    []
  );

  function renderDescriptions() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: 20 }}>
          <Typography variant="h6" component="div">
            {height}
          </Typography>
          <span>
            <Typography>altura</Typography>
          </span>
        </div>
        <div style={{ margin: 20 }}>
          <Typography variant="h6" component="div">
            {weight}
          </Typography>
          <span>
            <Typography>Peso</Typography>
          </span>
        </div>
      </div>
    );
  }

  function renderEvolutions() {
    return (
      <>
        {((prev_evolution || next_evolution) && (
            <Typography component="span" variant="h5" sx={{ mt: 2 }}>
              Evoluções
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                {prev_evolution?.map(({ num }) => (
                  <img src={getPokemonEvolution(num)} alt={name} key={`${num}-${id}`} />
                ))}

                {next_evolution?.map(({ num }) => (
                  <img src={getPokemonEvolution(num)} alt={name} key={`${num}-${id}`} />
                ))}
              </Stack>
            </Typography>
          ))}
      </>
    );
  }

  function renderWeaknesses() {
    return (
      <Typography component={"span"} variant="h5" sx={{ mt: 2 }}>
        Fraquezas
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          style={{ margin: 20 }}
        >
          {weaknesses?.map((pokemonType, index) => {
            return pokemonTypeStyle[pokemonType](index, id, pokemonType);
          })}
        </Stack>
      </Typography>
    );
  }

  return (
    <Modal
      open={visible}
      onClose={() => {
        handleControllPokemonDescription();
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <StyledHeader typecolor={pokemonColorStyle[type[0]]}>
          <img src={img} style={{ minWidth: 120 }} alt={name} width={"20%"} />
        </StyledHeader>

        <Box>
          <Typography variant="subtitle2" component="h6">
            <StyledPokemonNumber>#{num}</StyledPokemonNumber>
          </Typography>
          <Typography variant="h4" component="h2">
            {name}
          </Typography>

          <div style={{ margin: "20px" }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              {type?.map((pokemonType, index) => {
                return pokemonTypeStyle[pokemonType](index, id, pokemonType);
              })}
            </Stack>
          </div>
        </Box>
        <Box>
          {renderDescriptions()}
          {renderEvolutions()}
          {renderWeaknesses()}
        </Box>
      </StyledBox>
    </Modal>
  );
}

export default forwardRef(PokemonDescription);
