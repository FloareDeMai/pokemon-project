import Pokemon from "./Pokemon";
import classes from "./PokemonList.module.css"
import React from 'react'

export default function PokemonList(props) {
    return (
        <ul className="cards">
            {props.pokemons.map((pokemon) => <Pokemon key={pokemon.name} title={pokemon.name} urlPokemon={pokemon.url}/>)}
        </ul>
    )
}
