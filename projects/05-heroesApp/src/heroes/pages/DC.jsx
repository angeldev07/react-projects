import { HeroList } from "../components/HeroList"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const DC = () => {
	const heroes = getHeroesByPublisher('DC Comics')
	return (
		<>
			<h1>DC page</h1>
			<hr />
			<HeroList heroes={heroes}  />
		</>
	)
}
