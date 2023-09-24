import { Movie } from '../types'

interface Props {
	movies: Array<Movie>
}

const MovieCard = ({ movie }: { movie: Movie }) => {
	return (
		<li>
			<img src={movie.poster} alt={movie.title} />
			<div className='movie-info'>
				<strong>{movie.title}</strong>
				<span>{movie.year}</span>
			</div>
		</li>
	)
}

const ListMovies = ({ movies }: { movies: Array<Movie> }) => {
	return (
		<ul className="movies-container">
			{movies.map(movie => (
				<MovieCard movie={movie} key={movie.id} />
			))}
		</ul>
	)
}

export const Movies = ({ movies }: Props) => {
	return (
		<>
			{movies.length === 0 ? (
				<p>Looks like no response for the search. Try again</p>
			) : (
				<ListMovies movies={movies} />
			)}
		</>
	)
}
