import { createContext, useState } from 'react'
import user from '/public/data.json'

const userContext = createContext()

const { currentUser } = user

// creamos el proveedor del contexto
const UserProvider = ({ children }) => {
	const [user, setUser] = useState(currentUser)

	const data = {
		user,
	}

	return <userContext.Provider value={data}>{children}</userContext.Provider>
}

export { UserProvider }
export default userContext
