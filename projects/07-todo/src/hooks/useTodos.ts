import { useReducer } from 'react'
import { FilterValue, ListOfTodo, Todo } from '../types/types'
import { TODO_FILTERS } from '../const/filters'

// Interface para tipar el estado
interface State {
	todos: ListOfTodo
	filterSelected: FilterValue
}

//declaro el estado inicial de mi app
const INITIAL_STATE: State = {
	todos: [],
	filterSelected: 'all',
}

// declaro las posibles acciones que tiene mi aplicacion.
type Action =
	| { type: 'ADD'; payload: { content: string } }
	| { type: 'REMOVE'; payload: { id: number } }
	| { type: 'CLEAR_COMPLETED' }
	| { type: 'MARK_CHECK'; payload: { id: number } }
	| { type: 'CHANGE_FILTER'; payload: { filter: FilterValue } }

// Declaro el reducer
const todoReducer = (state: State, action: Action): State => {
	if (action.type === 'ADD') {
		const { content } = action.payload
		const todo: Todo = {
			id: Date.now(),
			content,
			completed: false,
		}
		return {
			...state,
			todos: [...state.todos, todo],
		}
	}

	if (action.type === 'REMOVE') {
		const newTodos = state.todos.filter(({ id }) => id !== action.payload.id)
		return {
			...state,
			todos: newTodos,
		}
	}

	if (action.type == 'CLEAR_COMPLETED') {
		return {
			...state,
			todos: state.todos.filter(todos => !todos.completed),
		}
	}

	if (action.type === 'MARK_CHECK') {
		const { id } = action.payload
		return {
			...state,
			todos: state.todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					}
				}
				return todo
			}),
		}
	}

	if (action.type === 'CHANGE_FILTER') {
		return {
			...state,
			filterSelected: action.payload.filter,
		}
	}

	return state
}

export const useTodos = () => {
	const [{ filterSelected, todos }, dispatch] = useReducer(
		todoReducer,
		INITIAL_STATE
	)

	// accion para agregar un todo
	const handleAddTodo = (content: string) => {
		dispatch({ type: 'ADD', payload: { content } })
	}

	// accion para remover un todo
	const handleRemoveTodo = (id: number) => {
		dispatch({ type: 'REMOVE', payload: { id } })
	}

	// accion para hacer toggle del completed al tood
	const handleMarkCompletedToDo = (id: number) => {
		dispatch({ type: 'MARK_CHECK', payload: { id } })
	}

	// accion para limpiar el todo de las tareas ya realizadas
	const handleClear = () => {
		dispatch({ type: 'CLEAR_COMPLETED' })
	}

	const handleChangeFilter = (filter: FilterValue) => {
		dispatch({ type: 'CHANGE_FILTER', payload: { filter } })
	}

	const itemLeft = todos.filter(todo => !todo.completed).length

	const filteredToDo = todos.filter(todo => {
		if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
		if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
		return todo
	}) 

	return {
		handleAddTodo,
		handleRemoveTodo,
		handleMarkCompletedToDo,
		handleClear,
		handleChangeFilter,
		itemLeft,
		filterSelected,
		todos: filteredToDo,
	}
}
