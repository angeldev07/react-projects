import { Todos } from './components/Todos'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useContext } from 'react'
import { TodoContext } from './contexts/todos'

export const App = () => {
	const { todos, itemLeft, handleClear } = useContext(TodoContext)
	return (
		<main>
			<h1> To Do List App with TS! </h1>
			<Header />
			<section>
				<Todos todos={todos} />
				<div>
					<span> {itemLeft} items left </span>
					<button onClick={handleClear}>Clear Completed</button>
				</div>
			</section>
			<section>
				<Footer />
			</section>
		</main>
	)
}
