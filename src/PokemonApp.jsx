import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, setPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

    const {isLoading, pokemons = [], page} = useSelector(state => state.pokemons)
    console.log(isLoading)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons())
    }, [])


  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? 'True' : 'False'}</span>

      <ul>
        {pokemons.map(pokemon =>(
            
            <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Siguiente pagina
      </button>
    </>
  );
};
