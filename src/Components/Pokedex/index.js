import { Fragment, useRef, useState } from "react";
import { pokemonColorStyle, pokemonTypeStyle } from "../../utils/utils";
import { useFetch } from "../../Hooks/useFetch";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  CardContent,
  Box,
  Toolbar,
  Stack,
} from "@mui/material";
import {
  SearchIconWrapper,
  StyledInputBase,
  StyledPokemonNumber,
  StyledPokeballLoading,
  StyledLink,
  StyledAppBar,
  StyledSearch,
  StyledToolbar,
} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import PokemonDescription from "../../Components/PokemonDescription";
import "animate.css";

export function Pokedex() {
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetch(process.env.REACT_APP_API_POKEMON);
  const modalRef = useRef(null);

  function handleOpenPokemonDescription(pokemon) {
    modalRef.current?.setPokemon(pokemon);
    modalRef.current?.handleControllPokemonDescription();
  }

  function renderPokemonLoading() {
    return <StyledPokeballLoading />;
  }

  function renderPokemons() {
    return (
      <Fragment>
        {data.pokemon
          ?.filter(({ name, num }) => {
            if (search === "") return true;
            return name.toLowerCase().includes(search) || num.includes(search);
          })
          .map((pokemon) => (
            <Grid
              item
              spacing={1}
              xs={6}
              sm={4}
              md={2}
              key={pokemon.id}
              onClick={() => handleOpenPokemonDescription(pokemon)}
            >
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={pokemon.img}
                    alt={pokemon.name}
                    style={{
                      background: `linear-gradient(180deg, ${
                        pokemonColorStyle[pokemon.type[0] || pokemon.type]
                      }, 40%, transparent)`,
                      height: "160px",
                      overflow: "scroll",
                      objectFit: "contain",
                    }}
                  />
                  <StyledPokemonNumber>#{pokemon.num}</StyledPokemonNumber>
                  <CardContent>
                    <Typography variant="h6" component="p">
                      {pokemon.name}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Stack direction="row" spacing={1}>
                      {pokemon.type?.map((pokemonType, index) => {
                        return pokemonTypeStyle[pokemonType](
                          index,
                          pokemon.id,
                          pokemonType
                        );
                      })}
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Fragment>
    );
  }

  return (
    <Box>
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledLink href="/" className="a-active">
            <img src="/favicon.ico" width="24" />
            Pokédex
          </StyledLink>
          <StyledLink href={process.env.REACT_APP_URL_POKEMEMORY}>
            <img
              src={`${process.env.REACT_APP_URL_POKEMEMORY}/jquery.svg`}
              width="24"
            />
            Pokémemory
          </StyledLink>
        </StyledToolbar>
        <StyledSearch onChange={(e) => setSearch(e.target.value)} height={32}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            name="search-field"
            inputProps={{ "aria-label": "search" }}
          />
        </StyledSearch>
      </StyledAppBar>

      <Box m={8}>
        <Grid
          container
          spacing={{ xs: 4, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {error ? <Fragment> {error.message} </Fragment> : null}
          {loading ? renderPokemonLoading() : renderPokemons()}
        </Grid>
      </Box>
      <PokemonDescription ref={modalRef} />
    </Box>
  );
}
