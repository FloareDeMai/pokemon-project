import React from 'react'
import classes from './MainNavigation.module.css'
import {Link} from 'react-router-dom'
import ThemeToggler from '../ThemeToggler'

function Navbar() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Pokemon</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/pokemons">Pokemons</Link>
                    </li>
                    <li>
                        <Link to="/types">Types</Link>
                    </li>
                    <li>
                        <ThemeToggler/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
