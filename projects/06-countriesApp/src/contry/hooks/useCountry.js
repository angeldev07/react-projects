import { useEffect, useState } from "react"

export const useContry = (countrySearch) => {
    const [country, setCountry] = useState({})
	const [load, setLoad] = useState(true)
    useEffect(() => {
        setLoad(true)
		fetch(`https://restcountries.com/v3.1/alpha/${countrySearch}`)
			.then(res => res.json())
			.then(res => {
				setCountry(res[0])
				setLoad(false)
			})
	}, [countrySearch])
    return {
        country,
        load
    }
}