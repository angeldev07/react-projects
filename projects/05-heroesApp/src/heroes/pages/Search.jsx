import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../hooks/useForm'
import { getHeroByName } from '../helpers/getHeroByName'
import { HeroCard } from '../components/HeroCard'

export const Search = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { searchText, onInputChange } = useForm({
		searchText: '',
	})

	const { q = '' } = queryString.parse(location.search)
	const heroes = getHeroByName(q)

	const handleSubmit = e => {
		e.preventDefault()

		if (searchText.trim().length <= 2) return

		navigate(`?q=${searchText}`)
	}

	return (
		<>
			<h1>Search</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Find your hero"
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={searchText}
							onChange={onInputChange}
						/>
						<button type="submit" className="btn btn-outline-primary mt-1">
							Search
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />
					{heroes.length > 0 &&
						heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)}

					{q && heroes.length < 1 && (
						<div className="alert alert-danger">not found {q}</div>
					)}

					{!q && <div className="alert alert-info">Search a hero</div>}
          
				</div>
			</div>
		</>
	)
}
