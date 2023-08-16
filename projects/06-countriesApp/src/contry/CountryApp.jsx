import { useState } from 'react'
import { ListCountries } from './components/ListCountries'
import { REGIONS as regions } from './const/regions'
import { useContries } from './hooks/useCountries'
import { filterCountries } from './helpers/filterCountries'

export const CountryApp = () => {
	const { countries, region, updateRegion } = useContries()
	const [search, setSearch] = useState('')

	const filteredCountries =
		search.trim().length > 0 ? filterCountries(countries, search.trim().toLocaleLowerCase()) : countries

	const handleChange = e => {
		setSearch(e.target.value)
	}

	return (
		<section className="my-10">
			<section className="px-6 md:flex">
				<input
					className="shadow-lg w-full md:max-w-[550px] mb-8 px-6 py-3	dark:bg-dark-blue"
					type="text"
					value={search}
					placeholder="Search for a contry..."
					onChange={handleChange}
				/>
				<select
					className="inline-block ml-auto px-6 cursor-pointer outline-none shadow-lg dark:bg-dark-blue"
					value={region}
					onChange={e => updateRegion(e.target.value)}
				>
					{regions.map((regionS, i) => (
						<option key={i} value={regionS}>
							{regionS}
						</option>
					))}
				</select>
			</section>
			<section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 p-6">
				{filteredCountries.length > 0 && (
					<ListCountries countries={filteredCountries} />
				)}
			</section>
		</section>
	)
}
