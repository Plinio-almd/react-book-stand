import { ImWarning } from "react-icons/im"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="nf-container">
      <ImWarning size='4rem'/>
      <h1>Página não encontrada</h1>
      <Link to={'/'}>Voltar</Link>
    </div>
  )
}
export default NotFoundPage