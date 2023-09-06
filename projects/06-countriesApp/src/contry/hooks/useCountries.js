import { useEffect, useState } from "react"
import { REGIONS as regions } from "../const/regions"

export const useContries = () => {
    const [countries, setCountries] = useState([])
    const [region, setRegion] = useState('')

    const searchCountries = async (url) => {
        const http = await fetch(url)
        const res = await http.json()
        setCountries(res)
    }

   const updateRegion = value => setRegion(value)


    useEffect(() => {
		searchCountries('https://restcountries.com/v3.1/all')
	}, [])

	useEffect(() => {
		if (region.length < 1) return

		if (region === regions[0]) {
			searchCountries('https://restcountries.com/v3.1/all')
			return
		}

        searchCountries(`https://restcountries.com/v3.1/region/${region}`)
	}, [region])

    return {
        countries,
        region,
        updateRegion,
    }

}