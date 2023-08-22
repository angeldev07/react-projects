import { TODO_FILTERS } from "../const/filters";

export interface Todo {
	id: number
	content: string
	completed: boolean
}

export type FilterValue = typeof TODO_FILTERS[keyof  typeof TODO_FILTERS]
export type ListOfTodo = Array<Todo>