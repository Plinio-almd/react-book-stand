import { useState } from "react"
import BackBtn from "../assets/back-btn.svg"
import ImgBtn from "../components/ImgBtn"

const AuthPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === '' || password === '') {
      alert('Digite os dados de acesso')
    }
    console.log(`${username} ${password}`)
    console.log()
  }

  return (
    <div className="auth-container">
      <header>
        <ImgBtn
          src={BackBtn}
          href="/login"
        />
        <h5>Acesso exclusivo para trabalhadores</h5>
      </header>
      <form
        className="form-container"
        onSubmit={handleSubmit}
      >
        
        <label htmlFor="login">Usuário: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Senha: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" type="submit"> Entrar </button>
      </form>
    </div>
  )
}
export default AuthPage
