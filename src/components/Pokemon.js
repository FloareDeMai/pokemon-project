import React from 'react'
import Card from './ui/Card'
import classes from './PokemonItem.module.css'
import { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import AppTheme from '../Colors';
import ThemeContext from '../context/ThemeContext';



export default function Pokemon(props) {
   
    const [loadedImages, setLoadedImages] = useState("");
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    useEffect(() => {
   
        fetch(props.urlPokemon)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setLoadedImages(data.sprites.front_default)
        })
    }, [props.urlPokemon])

    


    return (
        <Card>
            <div style={{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,  
            }}>
            <div className={classes.image}>
                <img src={loadedImages} alt={props.title} />
            </div>
            <div className={classes.content} style={{color: `${currentTheme.textColor}`}}>
            <Link to={`/pokemon/${props.urlPokemon.split("/").slice(-2).slice(0, -1)}`}  style={{textDecoration:'none'}}>
                <h3 style={{color: `${currentTheme.textColor}`}}>{props.title}</h3>
                </Link>
            </div>
            </div>
        </Card>
    )
}
