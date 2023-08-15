import { CountryItem } from './CountryItem'

export const ListCountries = ({ countries }) => {
	return (
		<>
			{countries?.map(country => (
				<CountryItem
					key={`${country.cca2} - ${country.ccn3}`}
					country={country}
				/>
			))}
		</>
	)
}
