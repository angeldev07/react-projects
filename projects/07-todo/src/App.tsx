import { Todos } from './components/Todos'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useContext } from 'react'
import { TodoContext } from './contexts/todos'
import './app.css'
export const App = () => {
	const { todos, itemLeft, handleClear } = useContext(TodoContext)
	return (
		<main className="main-container">
			<Header />
			<section className="todos-container">
				<Todos todos={todos} />
				<div className="todos-indicator">
					<span> {itemLeft} items left </span>
					<Footer />
					<button onClick={handleClear}>Clear Completed</button>
				</div>
			</section>
			<Footer />
		</main>
	)
}
