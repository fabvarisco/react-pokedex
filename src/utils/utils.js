import { StyledPokemonChip } from "./style";

export const pokemonTypeStyle = {
  Fire: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      typecolor={pokemonColorStyle[pokemonType]}
    />
  ),
  Grass: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      typecolor={pokemonColorStyle[pokemonType]}
      textcolor="#212121"
    />
  ),
  Poison: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      typecolor={pokemonColorStyle[pokemonType]}
    />
  ),
  Flying: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      typecolor={pokemonColorStyle[pokemonType]}
    />
  ),
  Water: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      typecolor={pokemonColorStyle[pokemonType]}
    />
  ),
  Bug: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      typecolor={pokemonColorStyle[pokemonType]}
    />
  ),
  Normal: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      typecolor={pokemonColorStyle[pokemonType]}
      textcolor="#212121"
    />
  ),
  Ground: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      textcolor="#212121"
      typecolor={pokemonColorStyle[pokemonType]}
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
      typecolor={pokemonColorStyle[pokemonType]}
    />
  ),
  Psychic: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      typecolor={pokemonColorStyle[pokemonType]}
    />
  ),
  Ice: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      typecolor={pokemonColorStyle[pokemonType]}
    />
  ),
  Dragon: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      typecolor={pokemonColorStyle[pokemonType]}
    />
  ),
  Rock: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      typecolor={pokemonColorStyle[pokemonType]}
    />
  ),
  Ghost: (index, id, pokemonType) => (
    <StyledPokemonChip
      key={`${index}-${id}`}
      label={pokemonType}
      typecolor={pokemonColorStyle[pokemonType]}
    />
  ),
};

export const pokemonColorStyle = {
  Fire: "#fd7d24",
  Grass: "#9bcc50",
  Poison: "#b97fc9",
  Flying: "#3dc7ef",
  Water: "#4592c4",
  Bug: "#729f3f",
  Normal: "#a4acaf",
  Ground: "#f7de3f",
  Electric: "#eed535",
  Fighting: "#d56723",
  Psychic: "#f366b9",
  Ice: "#51c4e7",
  Dragon: "#53a4cf",
  Rock: "#a38c21",
  Ghost: "#7b62a3",
};

export function getPokemonEvolution(num) {
  return `http://www.serebii.net/pokemongo/pokemon/${num}.png`;
}
