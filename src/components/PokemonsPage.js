import React from 'react'
import { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import '../index.css'

export default function PokemonsPage() {

    const [loading, setLoading] = useState(true);
    const [loadedPokemons, setLoadedPokemons] = useState([]);
    
    
    useEffect(() => {
        setLoading(true);
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const pokemons = [...data.results]
            
            setLoading(false);
            setLoadedPokemons(pokemons)
           
        });
    }, []);

     if(loading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    return (
       
            <section className="">
                <h1 className="main-title">All Pokemons</h1>
                <PokemonList pokemons={loadedPokemons} />
            </section>
         
       
    )
}
