import { useContext } from "react";
import { CrossIcon } from "../const/svgs"
import { Todo as ToDo } from "../types/types"
import { TodoContext } from "../contexts/todos";

interface Props extends ToDo {

}

export const Todo = ({id, completed, content}: Props) => {
	const { handleRemoveTodo, handleMarkCompletedToDo } = useContext(TodoContext)
	return (
		<li
			key={id}
			style={{ textDecoration: completed ? 'underline' : '' }}
		>
			<input
				type="checkbox"
				onClick={() => handleMarkCompletedToDo(id)}
				defaultChecked={completed}
			/>
			{content}
			<button onClick={() => handleRemoveTodo(id)}>
				<CrossIcon />
			</button>
		</li>
	)
}
