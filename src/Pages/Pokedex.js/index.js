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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledPokemonNumber,
} from "./style";
import { pokemonTypeStyle } from "../../utils/utils";
import { PokemonDescription } from "../../Components/PokemonDescription";

export function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modalController, setModalController] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  const modalRef = useRef(null);

  const handleOpenPokemonDescription = useCallback(() => {
    modalRef.current?.handleControllPokemonDescription();
  }, []);

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
      <Box m={8}>
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
            .map(({ id, name, img, type, num }) => (
              <Grid item xs sm={4} md={2} key={id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={img}
                      alt={name}
                      height="240"
                      style={{ background: "#CBC7C6" }}
                      onClick={handleOpenPokemonDescription}
                    />
                    <StyledPokemonNumber>#{num}</StyledPokemonNumber>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardContent>
                    <Stack direction="row" spacing={1}>
                      {type?.map((pokemonType, index) => {
                        return pokemonTypeStyle[pokemonType](
                          index,
                          id,
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
      <PokemonDescription
        ref={modalRef}
        open={modalController}
        pokemon={selectedPokemon}
        setOpen={setModalController}
      />
    </Box>
  );
}
