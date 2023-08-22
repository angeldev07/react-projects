
interface Props {
    onAddTodo: (content: string) => void
}

export const Header = ({onAddTodo}: Props) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { content } = Object.fromEntries(new FormData(e.currentTarget))
		onAddTodo(content.toString())
		e.currentTarget.querySelector('input[name="content"]')!.value = ''
	}
	return (
		<header>
			<form onSubmit={handleSubmit} autoComplete="off">
				<div></div>
				<input type="text" placeholder="Create a new todo..." name="content" />
			</form>
		</header>
	)
}
