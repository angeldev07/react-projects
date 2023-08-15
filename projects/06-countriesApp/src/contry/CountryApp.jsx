import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Header } from './components/Header'
import { ListCountries } from './components/ListCountries'
import { REGIONS as regions } from './const/regions'

export const CountryApp = () => {
	const [countries, setCountries] = useState([])
	const [search, setSearch] = useState('')
	const [region, setRegion] = useState('')

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then(res => res.json())
			.then(res => setCountries(res))
	}, [])

	useEffect(() => {
		if(region.length < 1)
			return
		
		if(region === regions[0]){
			fetch('https://restcountries.com/v3.1/all')
			.then(res => res.json())
			.then(res => setCountries(res))
			return
		}

		fetch(`https://restcountries.com/v3.1/region/${region}`)
			.then(res => res.json())
			.then(res => setCountries(res))
	}, [region])

	const searchContry = () => {
		return search.length > 0
			? countries.filter(
					country =>
						country?.name?.common
							?.toLowerCase()
							.includes(search.trim().toLowerCase()) ||
						country?.capital?.[0]
							?.toLowerCase()
							.includes(search.trim().toLowerCase())
			)
			: countries
	}

	const filteredCountries = useMemo(() => searchContry(), [countries, search])

	const handleChange = e => {
		setSearch(e.target.value)
	}

	const handleSelect = (e) => {
		setRegion(e.target.value)
	}

	return (
		<main>
			<Header />
			<section>
				<input
					className="border border-black"
					type="text"
					value={search}
					onChange={handleChange}
				/>
				<select value={region} onChange={handleSelect}>
					{regions.map((regionS,i) => (
						<option key={i} value={regionS}> {regionS}</option>
					))}
				</select>

			</section>
			<section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 p-6">
				{filteredCountries.length > 0 && (
					<ListCountries countries={filteredCountries} />
				)}
			</section>
		</main>
	)
}
