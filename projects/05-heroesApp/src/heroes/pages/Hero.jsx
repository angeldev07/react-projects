import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'
import { HeroCard } from '../components/HeroCard'
export const Hero = () => {
	const { heroId } = useParams()
	const hero = getHeroById(heroId)

  if(!hero) {
    return <Navigate to="/" />
  }

	return (
    <div>
      <HeroCard hero={hero} />
    </div>
  )
}
