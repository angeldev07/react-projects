import { HeroCard } from "./HeroCard"

export const HeroList = ({ heroes }) => {

	return (
		<section className="row rows-cols-1 row-cols-md-3 g-2">
			{heroes.map(hero => (
				<HeroCard key={hero.id} hero={hero} />
			))}
		</section>
	)
}
