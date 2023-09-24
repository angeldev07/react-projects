import { useState } from 'react'
import response from './mocks/movies-res.json'

import './style.css'

function App() {
  const  movies = response.Search

  const [search, setSearch] = useState('')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
  }

  const handleClick = () => {
    console.log(search)
  }

  return (
    <main>
      <h1>Buscador de Peliculas</h1>
      <section className='form'>
        <input type="text" placeholder='Marvel, DC, ninja...' value={search} onChange={handleChange}/>
        <button onClick={handleClick}>buscar</button>
      </section>
      <section className='movies-container'>
          {movies.map(movie => (
              <div key={movie.imdbID}>
                  <img src={movie.Poster} alt={movie.Title} />
                  <span>{movie.Title}</span>
                  <span>{movie.Year}</span>
              </div>
          ))}
      </section>
    </main>
  )
}

export default App
