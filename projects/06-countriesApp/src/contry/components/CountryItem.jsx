/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
export const CountryItem = ({ country }) => {
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate(`/country/${country.cca2}`)
	}

	return (
		<article className="shadow-xl cursor-pointer hover:-translate-y-2 transition-transform" onClick={handleNavigate} >
			<picture>
				<img
					src={country.flags.svg}
					alt={country.flags.alt}
					className="rounded-t-md w-full h-44 object-cover"
				/>
			</picture>
			<section className="py-4 px-6">
				<h2 className="text-xl pb-2 font-extrabold">{country.name.common}</h2>
				<ul className="pb-6 font-semibold">
					<li>
						Population: <span className="font-normal">{country.population.toLocaleString()}</span>{' '}
					</li>
					<li>
						Region: <span className="font-normal">{country.region} </span>{' '}
					</li>
					<li>
						Capital: <span className="font-normal">{country.capital} </span>{' '}
					</li>
				</ul>
			</section>
		</article>
	)
}
