export const filterCountries = (countries, search) => {
	return countries.filter(country => {
		return (
			country?.name?.common
				?.toLowerCase()
				.includes(search) ||
			country?.capital?.[0]?.toLowerCase().includes(search)
		)
	})
}
