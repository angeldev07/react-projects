import { Todos } from './components/Todos'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useContext } from 'react'
import { TodoContext } from './contexts/todos'
import './app.css';
export const App = () => {
	const { todos, itemLeft, handleClear } = useContext(TodoContext)
	return (
		<main className='main-container'>
			<header>
				<div className='hero-img'></div>
				<div className='hero-container'>
					<h1 className='hero-title'> todo</h1>
					<Header />
				</div>
			</header>
			<section className='todos-container'>
				<Todos todos={todos} />
				<div className='todos-indicator'>
					<span> {itemLeft} items left </span>
					<div className='footer-container'>
						<Footer />
					</div>
					<button onClick={handleClear}>Clear Completed</button>
				</div>
			</section>
			<footer className='footer-container'>
				<Footer />
			</footer>
		</main>
	)
}
