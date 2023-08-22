import { useContext } from 'react'
import { TodoContext } from '../contexts/todos'

export const Header = () => {
	const { handleAddTodo } = useContext(TodoContext)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { content } = Object.fromEntries(new FormData(e.currentTarget))
		handleAddTodo(content.toString())
		e.currentTarget.querySelector('input[name="content"]')!.value = ''
	}
	return (
		<form className='hero-form' onSubmit={handleSubmit} autoComplete="off">
			<div className='hero-form--check'></div>
			<input className='hero-form--input' type="text" placeholder="Create a new todo..." name="content" />
		</form>
	)
}
