import { Todos } from './components/Todos'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useTodos } from './hooks/useTodos'

export const App = () => {
	const {
		handleAddTodo,
		handleChangeFilter,
		handleClear,
		handleMarkCompletedToDo,
		handleRemoveTodo,
		itemLeft,
		todos
	} = useTodos()

	return (
		<main>
			<h1> To Do List App with TS! </h1>
			<Header onAddTodo={handleAddTodo} />
			<section>
				<Todos
					todos={todos}
					onDeleteTodo={handleRemoveTodo}
					onMarkTodo={handleMarkCompletedToDo}
				/>
				<div>
					<span> {itemLeft} items left </span>
					<button onClick={handleClear}>Clear Completed</button>
				</div>
			</section>
			<section>
				<Footer onUpdateFilter={handleChangeFilter} />
			</section>
		</main>
	)
}
