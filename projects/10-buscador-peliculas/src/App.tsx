import { useState, useCallback } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import debounce from 'just-debounce-it'


import './style.css'

function App() {
	const [search, setSearch] = useState('')
	const { movies, loading, getMovies } = useMovies({ search })

  const debounceGetMovies = useCallback( 
    debounce( (search: string) => {
      getMovies({search})
    }, 600)
  , [])
  

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
      debounceGetMovies(e.target.value)
	}

	const handleClick = () => {
    getMovies({search})
	}

	return (
		<main>
			<h1>Buscador de Peliculas</h1>
			<section className="form">
				<input
					type="text"
					placeholder="Marvel, DC, ninja..."
					value={search}
					onChange={handleChange}
				/>
				<button onClick={handleClick}>buscar</button>
			</section>
			<section>
				{loading ? <p>Cargando...</p> : <Movies movies={movies} /> }
			</section>
		</main>
	)
}

export default App
