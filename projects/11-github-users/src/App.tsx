// import { useState } from 'react'
import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Perfil } from './components/Perfil'
import { useGitUser } from './components/hooks/userGitUser'

function App() {
  const [value, setValue] = useState('')
  const { user, getGithubUser} = useGitUser()

  const handleChange = ( value: string ) => {
    setValue(value)
  }

  const handleSearch = () => {
    getGithubUser({username: value})
  }

	return (
		<main>
			<header>
				<Header />
			</header>
			{/* buscador y resultado */}
			<section>
				<Input value={value} onClick={handleSearch} onChange={handleChange} />
        <Perfil user={user}/>
			</section>
		</main>
	)
}

export default App
