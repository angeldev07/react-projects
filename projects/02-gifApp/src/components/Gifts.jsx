import results from '../mockups/gif.json'
import { Gif } from './Gif'


export const Gifts = ({ search }) => {

    const data = results.data

	return (
		<section className='results-gif-container'>
			<h1 className='results-gif__title'>
				Resultados para: <span> {search} </span>
			</h1>
            <div className='results-card'>
                {
                    data.map( ({id, images, title, user})=> (
                    <Gif key={id} heroImg={images.downsized_medium.url} title={title} user={user} />
                    ))
                }
            </div>
		</section>
	)
}
