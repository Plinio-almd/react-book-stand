import { useState } from "react"
import { Link, useNavigate } from "react-router-dom" 
import BackBtn from "../assets/back-btn.svg"
import ImgBtn from "../components/ImgBtn"
import useStore from "../stores/store"

const AuthPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const someData = useStore(state => state.user)
  const [wrongInfo, setWrongInfo] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === '' || password === '') {
      alert('Digite os dados de acesso')
    } else if(username !== "admin" || password !== "segredo"){
      setWrongInfo(true)
    } else {
      console.log(`${username} ${password}`)
    }
  }

  return (
    <div className="auth-container">
      
        <ImgBtn
          src={BackBtn}
          href="/"
        />
        <h5>Acesso exclusivo para usuários autorizados</h5>
      
      <form
        className="form-container"
        onSubmit={handleSubmit}
      >
        
        <label htmlFor="login">Usuário: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setWrongInfo(false)}
        />
        <label htmlFor="password">Senha: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setWrongInfo(false)}
        />
        <button className="login-btn" type="submit"> Entrar </button>
      </form>
      {wrongInfo && 
        <p>Informações de acesso inválidas</p>
      }
    </div>
  )
}
export default AuthPage
