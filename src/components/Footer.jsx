import { Link } from "react-router-dom"
import powerIcon from "../assets/power-btn.svg"
import ImgBtn from "./ImgBtn"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>Desenvolvido por <Link to="https://github.com/Plinio-almd">PLN</Link> - {year}</p>
      <span>
        <ImgBtn src={powerIcon} href="/login"/>
      </span>
    </footer>
  )
}
export default Footer