import React, {useState, useEffect, useContext} from 'react'
import classes from './PokemonItem.module.css'
import AppTheme from '../Colors'
import ThemeContext from '../context/ThemeContext'


const PokemonDetail = (props) => {
    

    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true);

     const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    

    useEffect(() => {
        const {id} = props.match.params
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            
            setPokemon(data)
            setLoading(false);
        })

    }, [props.match.params])




      if(loading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }else{
         return (
        <div className="main-card" style={{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,  
            }}>
            <div className={classes.image} >
                <img src={pokemon.sprites.front_default} alt={pokemon.sprites.front_default} />
            </div>
            <div style={{color: `${currentTheme.textColor}`}} className={classes.content}>
                <h3 style={{color: `${currentTheme.textColor}`}}>{pokemon.name}</h3>
                <p>Weight: {pokemon.weight}</p>
                <p>XP: {pokemon.base_experience}</p>
            </div>    
        </div>
    )
    }
    
   
}


export default PokemonDetail