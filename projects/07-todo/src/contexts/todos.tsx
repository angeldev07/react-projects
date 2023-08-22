import { createContext } from 'react'
import { useTodos } from '../hooks/useTodos'
import { FilterValue, ListOfTodo } from '../types/types'

//interface para controlar el contexto
interface Context {
	filterSelected: FilterValue
	handleAddTodo: (content: string) => void
	handleChangeFilter: (filter: FilterValue) => void
	handleClear: () => void
	handleMarkCompletedToDo: (id: number) => void
	handleRemoveTodo: (id: number) => void
	itemLeft: number
	todos: ListOfTodo
}

interface Props {
	children: JSX.Element
}

// contexto para evitar el prop drilling
export const TodoContext = createContext<Context >({} as Context)

//proveedor del contexsto
const TodoProvider: React.FC<Props> = ({ children }) => {
	const {
		filterSelected,
		handleAddTodo,
		handleChangeFilter,
		handleClear,
		handleMarkCompletedToDo,
		handleRemoveTodo,
		itemLeft,
		todos,
	} = useTodos()

	return (
		<TodoContext.Provider
			value={{
				filterSelected,
				handleAddTodo,
				handleChangeFilter,
				handleClear,
				handleMarkCompletedToDo,
				handleRemoveTodo,
				itemLeft,
				todos,
			}}
		>
			{children}
		</TodoContext.Provider>
	)
}

export default TodoProvider


