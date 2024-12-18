import { NavLink } from "react-router-dom"
const NavbarBootstrapHTML = () => {
   return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to='/'>Play Gamers</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
          </li>
          <li className="nav-item dropdown">
            <Navlink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </Navlink>
            <ul className="dropdown-menu">
              <li><Navlink className="dropdown-item" to='/products/ofertas'>Ofertas</Navlink></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Navlink className="dropdown-item" to='/products/nuevos'>Nuevos</Navlink></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Navlink className="dropdown-item" to='/products/juegos'>Juegos</Navlink></li>
            </ul>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
   )
}

export default NavbarBootstrapHTML 