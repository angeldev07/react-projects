import { useContext, useRef } from "react";
import { TodoContext } from "../contexts/todos";
export const TodoForm = () => {
    const { handleAddTodo } = useContext(TodoContext)
	const inputRef = useRef<HTMLInputElement>(null)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { content } = Object.fromEntries(new FormData(e.currentTarget))
		if(inputRef.current!.value.trim().length === 0)
			return 
		
		handleAddTodo(content.toString())
		inputRef.current!.value = ''
	}

	return (
		<form className="hero-form" onSubmit={handleSubmit} autoComplete="off">
			<div className="hero-form--check"></div>
			<input
				ref={inputRef}
				className="hero-form--input"
				type="text"
				placeholder="Create a new todo..."
				name="content"
			/>
		</form>
	)
}
