import { useCallback, useEffect, useRef, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  CardContent,
  AppBar,
  Box,
  Toolbar,
  Skeleton,
  Stack,
  Item,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledPokemonNumber,
} from "./style";
import { pokemonTypeStyle } from "../../utils/utils";
import PokemonDescription from "../../Components/PokemonDescription";

export function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const modalRef = useRef(null);

  function handleOpenPokemonDescription(pokemon) {
    modalRef.current?.setPokemon(pokemon);
    modalRef.current?.handleControllPokemonDescription();
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((response) => response.json())
      .then(({ pokemon }) => {
        setPokemons(pokemon);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  function renderPokemons() {
    console.log(pokemons);
    if (!pokemons) return <>Loading</>;
    return (
      <Box m={8} mt={2}>
        <Grid
          container
          spacing={{ xs: 4, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {pokemons
            ?.filter(({ name, num }) => {
              if (search === "") return true;
              return (
                name.toLowerCase().includes(search) || num.includes(search)
              );
            })
            .map((pokemon) => (
              <Grid
                item
                xs
                sm={4}
                md={2}
                key={pokemon.id}
                onClick={() => handleOpenPokemonDescription(pokemon)}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={pokemon.img}
                      alt={pokemon.name}
                      height="240"
                      style={{ background: "#CBC7C6" }}
                    />
                    <StyledPokemonNumber>#{pokemon.num}</StyledPokemonNumber>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {pokemon.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
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
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box>
      <AppBar position="static" style={{ background: "#313131" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Pokédex
          </Typography>
          <Search onChange={(e) => setSearch(e.target.value)}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase inputProps={{ "aria-label": "search" }} />
          </Search>
        </Toolbar>
      </AppBar>
      {loading ? (
        <Box>
          <Skeleton />
        </Box>
      ) : (
        renderPokemons()
      )}
      <PokemonDescription ref={modalRef} />
    </Box>
  );
}
