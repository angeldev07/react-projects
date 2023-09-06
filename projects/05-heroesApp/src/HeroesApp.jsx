import { Outlet, Navigate } from 'react-router-dom'
import { Navbar } from './ui'
import { useContext } from 'react'
import AuthContext from './auth/context/AuthContext'

export const HeroesApp = () => {
	const {authState} = useContext(AuthContext)
	const {user} = authState

	if(!user){
		return <Navigate to='/auth' />
	}

	return (
		<>
			<Navbar />
            <div className='container'>
                <Outlet />
            </div>
		</>
	)
}
