import { useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export const Login = () => {
	const navigate = useNavigate()
	const { login, authState } = useContext(AuthContext)

	if(authState.logged)
		return <Navigate to='/' />

	const onLogin = () => {
		login('Angel Garcia')
		navigate('/', { replace: true })
	}

	return (
		<div className="container">
			<h1>Login</h1>
			<hr />
			<button className="btn btn-primary" onClick={onLogin}>
				Login
			</button>
		</div>
	)
}
