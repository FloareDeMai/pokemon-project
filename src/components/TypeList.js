import React from 'react'
import { useState, useEffect, useContext } from 'react'
import classes from './PokemonItem.module.css'
import Card from './ui/Card';
import AppTheme from '../Colors';
import ThemeContext from '../context/ThemeContext';


export default function TypeList() {

const [loading, setLoading] = useState(true);
const [loadedStates, setLoadedStates] = useState([]);

const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

useEffect(() => {
    setLoading(true);
    fetch("https://pokeapi.co/api/v2/type")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.results);
        const types = [...data.results]
        setLoading(false)
        setLoadedStates(types)
    })
}, [])
   if(loading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <section>
            <h1 className="main-title" style={{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,  
            }}>Types</h1>
            <ul className="cards" style={{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,  
            }}>
                {loadedStates.map((type) => <Card>
                    <div className={classes.content} style={{background: '#FFEAC9', borderRadius: '5px'}}>
                        <h3>{type.name}</h3>
                    </div>
                </Card>)}
            </ul>
        </section>
    
    )
}
