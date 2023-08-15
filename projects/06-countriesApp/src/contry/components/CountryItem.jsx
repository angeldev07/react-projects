/* eslint-disable react/prop-types */

export const CountryItem = ({ country }) => {
	return (
		<article className="shadow-xl">
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
