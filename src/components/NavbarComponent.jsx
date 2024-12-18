import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavbarComponent = () =>{
    
    return(
        <nav className="navContainer">
          <Navlink className='aLink' to='/'>Play Gamers</Navlink>
          <NavLink className='aLink' to='/products/ofertas'>Ofertas</NavLink>
          <NavLink className='aLink' to='/products/nuevos'>Nuevos</NavLink>
          <NavLink className='aLink' to='/products/monitores'>Monitores</NavLink>
          <NavLink className='aLink' to='/products/juegos'>Juegos</NavLink>
          <NavLink className='aLink' to='/products/consolas'>Consolas</NavLink>
          <NavLink className='aLink' to='/cart'><CartWidget counter={15}/></NavLink>
          </nav>
    )
}

export default NavbarComponent 