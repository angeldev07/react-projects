import results from '../mockups/gif.json'
import { Gif } from './Gif'


export const Gifts = ({ search }) => {

    const data = results.data

	return (
		<main>
			<h1>
				Resultado de busqueda para: <span> {search} </span>{' '}
			</h1>
           {
            data.map( ({id, images, title, user})=> (
               <Gif key={id} heroImg={images.downsized_medium.url} title={title} user={user} />
            ))
           }
		</main>
	)
}
