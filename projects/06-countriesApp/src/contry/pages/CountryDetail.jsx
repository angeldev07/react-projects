import { useParams, useNavigate } from 'react-router-dom'
import { ArrowBack } from '../const/icons'
import { useContry } from '../hooks/useCountry'

export const CountryDetail = () => {
	const navigate = useNavigate()

	const params = useParams()
	const { country, load } = useContry(params.nameCountry)

	const handleNavigate = to => {
		navigate(to)
	}

	return (
		<section className="px-6  ">
			<header className="my-6">
				<button
					onClick={() => handleNavigate('/')}
					className="bg-gray-100 rounded-md shadow-2xl px-6 py-2  flex gap-3 capitalize items-center justify-center dark:bg-dark-blue"
				>
					<div className="w-5 h-5">
						<ArrowBack />
					</div>
					back
				</button>
			</header>
			{!load ? (
				<article className=" grid-cols-2  md:grid">
					<div className="my-10 w-full">
						<picture>
							<img
								src={country?.flags?.svg}
								alt={country?.flags?.alt}
								className="w-full h-full max-h-[500px]"
							/>
						</picture>
					</div>
					<div className="md:pl-16 flex-grow md:pt-8">
						<h1 className="font-bold text-3xl mt-8 mb-4">
							{country?.name?.common}
						</h1>
						<div className="md:flex gap-10">
							<ul className="pb-8 font-semibold flex flex-col gap-3 ">
								<li>
									Native Name:
									<span className="font-normal"> {country.name.official}</span>
								</li>
								<li>
									Population:
									<span className="font-normal">
										{' '}
										{country.population.toLocaleString()}
									</span>
								</li>
								<li>
									Region: <span className="font-normal">{country.region} </span>
								</li>
								<li>
									Sub Region:{' '}
									<span className="font-normal">{country.subregion} </span>
								</li>
								<li>
									Capital:{' '}
									<span className="font-normal">{country.capital} </span>
								</li>
							</ul>

							<ul className="pb-6 font-semibold flex flex-col gap-3">
								<li>
									Top Level Domain:{' '}
									<span className="font-normal">{country.tld[0]}</span>
								</li>
								<li>
									Currencies: <span className="font-normal">COP</span>
								</li>
								<li>
									Langueages: <span className="font-normal"> es </span>
								</li>
							</ul>
						</div>

						<div className="flex flex-col flex-wrap gap-3 pb-6 md:flex-row md:items-center">
							<h2 className="capitalize font-bold pb-5 md:pb-0">
								border countries
							</h2>
							<div className="flex flex-wrap gap-3">
								{country?.borders?.map(border => (
									<button
										key={border}
										onClick={() => handleNavigate(`/country/${border}`)}
										className="bg-gray-100 rounded-md shadow-2xl px-4 py-2  capitalize dark:bg-dark-blue"
									>
										{border}
									</button>
								))}
							</div>
						</div>
					</div>
				</article>
			) : (
				<p>cargando...</p>
			)}
		</section>
	)
}
