import { forwardRef, Fragment, useImperativeHandle, useState } from "react";
import { Box, Modal, Stack, Typography } from "@mui/material";
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
      <Fragment>
        {(prev_evolution || next_evolution) && (
          <Typography
            component="span"
            variant="h5"
            style={{ marginBottom: 40 }}
          >
            Evoluções
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              {prev_evolution?.map(({ num }) => (
                <img
                  src={getPokemonEvolution(num)}
                  alt={name}
                  key={`${num}-${id}`}                
                />
              ))}

              {next_evolution?.map(({ num }) => (
                <img
                  src={getPokemonEvolution(num)}
                  alt={name}
                  key={`${num}-${id}`}
                />
              ))}
            </Stack>
          </Typography>
        )}
      </Fragment>
    );
  }

  function renderWeaknesses() {
    return (
      <Fragment>
        <Typography component={"p"} variant="h6" style={{ marginBottom: 10 }}>
          Fraquezas
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            marginBottom: 3,
          }}
        >
          {weaknesses?.map((pokemonType, index) =>
            pokemonTypeStyle[pokemonType](index, id, pokemonType)
          )}
        </Box>
      </Fragment>
    );
  }

  return (
    <Modal
      open={visible}
      onClose={() => {
        handleControllPokemonDescription();
      }}
    >
      <StyledBox>
        <StyledHeader typecolor={pokemonColorStyle[type[0]]}>
          <img src={img} alt={name} width={240} height={240}/>
        </StyledHeader>

        <Box>
          <Typography variant="subtitle2" component="h6">
            <StyledPokemonNumber>#{num}</StyledPokemonNumber>
          </Typography>
          <Typography variant="h4" component="h2" style={{ marginBottom: 20 }}>
            {name}
          </Typography>

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
