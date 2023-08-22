import { SunIcon } from '../const/svgs'
import { TodoForm } from './TodoForm'

export const Header = () => {

	return (
		<header>
			<div className="hero-img"></div>
			<div className="hero-container">
				<div className='hero-container--title'>
					<h1 className="hero-title"> todo</h1>
					<button>
						<SunIcon />
					</button>
				</div>
				<TodoForm />
			</div>
		</header>
	)
}
