import { HeroList } from "../components/HeroList"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const Marvel = () => {
	const heroes = getHeroesByPublisher('Marvel Comics')
	return (
		<>
			<h1>Marvel page</h1>
			<hr />
			<HeroList heroes={heroes} />
		</>
	)
}
