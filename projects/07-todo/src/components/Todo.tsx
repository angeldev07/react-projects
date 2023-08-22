
import { CrossIcon } from "../const/svgs"
import { Todo as ToDo } from "../types/types"

interface Props extends ToDo {
    onMarkTodo: (id: number) => void ,
    onDeleteTodo: (id: number) => void ,
}

export const Todo = ({id, completed, content, onMarkTodo, onDeleteTodo}: Props) => {
	return (
		<li
			key={id}
			style={{ textDecoration: completed ? 'underline' : '' }}
		>
			<input
				type="checkbox"
				onClick={() => onMarkTodo(id)}
				defaultChecked={completed}
			/>
			{content}
			<button onClick={() => onDeleteTodo(id)}>
				<CrossIcon />
			</button>
		</li>
	)
}
