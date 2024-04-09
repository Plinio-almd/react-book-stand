import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="header">
      <h1><Link to="/">Tem na Estante</Link></h1>
      <Link to="/contato"><span className="nav-link">Fale Conosco</span></Link>
    </nav>
  )
}
export default Header