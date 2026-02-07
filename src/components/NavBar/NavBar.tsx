import './Navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="logo">MyApp LOogo</span>

        <ul className="nav-links">
          <li>Inicio</li>
          <li>Explorar</li>
          <li>Contacto</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
