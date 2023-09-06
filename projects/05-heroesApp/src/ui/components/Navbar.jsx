import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import AuthContext from '../../auth/context/AuthContext'

export const Navbar = () => {
	const navigate = useNavigate()
	const { authState, logout } = useContext(AuthContext)
	const { user } = authState

	const onLogout = () => {
		logout()
		navigate('/auth/login', { replace: true })
	}
	
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
			<Link className="navbar-brand">Asociaciones</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? 'active' : ''}`
						}
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink className="nav-item nav-link" to="/dc">
						DC
					</NavLink>
					<NavLink className="nav-item nav-link" to="/search">
						search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link">{user?.name}</span>
					<button className="nav-item nav-link btn" onClick={onLogout}>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	)
}
