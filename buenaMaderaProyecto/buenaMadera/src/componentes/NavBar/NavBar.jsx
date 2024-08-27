import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

export const NavBar = () => {
  return (
    <header>
        <h1>Buena Madera</h1>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <ul class="navbar-nav">
                <li class="nav-item">Mates</li>
                <li class="nav-item">Bombillas</li>
                <li class="nav-item">Materas</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
  
}
export default NavBar
