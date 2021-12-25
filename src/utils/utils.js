import { StyledPokemonChip } from "./style";

  export const pokemonTypeStyle = {
    Fire: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="#fd7d24"
      />
    ),
    Grass: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="#9bcc50"
        textcolor="#212121"
      />
    ),
    Poison: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="#b97fc9"
      />
    ),
    Flying: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="linear-gradient(180deg, #3dc7ef 50% , #bdb9b8 50%)"
      />
    ),
    Water: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="#4592c4"
      />
    ),
    Bug: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="#729f3f"
      />
    ),
    Normal: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="#a4acaf"
        textcolor="#212121"
      />
    ),
    Ground: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        textcolor="#212121"
        typecolor="linear-gradient(180deg, #f7de3f  50% , #ab9842  50%)"
      />
    ),
    Electric: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="#eed535"
      />
    ),
    Fighting: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="#d56723"
        textcolor="white"
      />
    ),
    Psychic: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="#f366b9"
      />
    ),
    Ice: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="#51c4e7"
      />
    ),
    Dragon: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="linear-gradient(180deg, #53a4cf  50% , #f16e57  50%)"
      />
    ),
    Rock: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="#a38c21"
      />
    ),
    Ghost: (index, id, pokemonType) => (
      <StyledPokemonChip
        key={`${index}-${id}`}
        label={pokemonType}
        typecolor="#7b62a3"
      />
    ),
  };