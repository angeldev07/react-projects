import { Link } from "react-router-dom"

export const HeroCard = ({ hero }) => {
	return (
		<article className="card">
			<picture>
				<img
					src={`../../../src/assets/heroes/${hero.id}.jpg`}
					alt={hero.id}
					className="card-img-top"
				/>
			</picture>
			<div className="card-body">
				<h5 className="card-title">{hero.superhero}</h5>
				<Link to={`/hero/${hero.id}`} className="btn btn-primary">
					Go somewhere
				</Link>
			</div>
		</article>
	)
}
