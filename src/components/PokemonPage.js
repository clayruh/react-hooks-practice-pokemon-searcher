import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonArray, setPokemonArray] = useState([])
  const [search, setSearch] = useState('')

  useEffect( () => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(pokemonCollection => setPokemonArray(pokemonCollection))
  }, [])

// ----- FOR SEARCHING POKEMON ---------//
  function handleSearch(searchText) {
    setSearch(searchText)
    console.log(searchText)
  }

  const filteredArray = pokemonArray.filter( pokemon => {
    return pokemon.name.toLowerCase().includes( search.toLowerCase() )
  } )

// -------- FOR SUBMITTING FORM --------- //
  function addNewPokemon(newPokemon) {
    setPokemonArray( [...pokemonArray, newPokemon] )
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search search={search} handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemonArray={filteredArray} />
    </Container>
  );
}

export default PokemonPage;
