import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate()

    const onLogin = () => {
        navigate('/', { replace: true })
    }

  return (
    <div className="container">
        <h1>Login</h1>
        <hr />
        <button className="btn btn-primary" onClick={onLogin}>Login</button>
    </div>
  )
}
