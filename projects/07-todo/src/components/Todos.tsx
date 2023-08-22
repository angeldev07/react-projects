import { ListOfTodo } from '../types/types'
import { Todo } from './Todo'

interface Props {
	todos: ListOfTodo
}

export const Todos = ({ todos }: Props) => {
	return (
		<ul>
			{todos.length > 0 && todos.map(todo => <Todo key={todo.id} {...todo} />)}
			{todos.length === 0 && <li className="todo">There isn't job to do</li>}
		</ul>
	)
}
