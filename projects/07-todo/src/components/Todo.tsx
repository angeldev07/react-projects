import { useContext } from "react";
import { CheckIcon, CrossIcon } from "../const/svgs"
import { Todo as ToDo } from "../types/types"
import { TodoContext } from "../contexts/todos";

interface Props extends ToDo {

}

export const Todo = ({id, completed, content}: Props) => {
	const { handleRemoveTodo, handleMarkCompletedToDo } = useContext(TodoContext)
	return (
		<li
			key={id}
			style={{ textDecorationLine: completed ? 'line-through' : '' }}
			className="todo"
		>
			<div className="todo--content">
				<label htmlFor="check" className={`${completed ? 'completed': ''}`}>
					<input
						type="checkbox"
						onClick={() => handleMarkCompletedToDo(id)}
						defaultChecked={completed}
						id='check'
					/>
					{completed && <CheckIcon />}
				</label>
				<span> {content} </span> 
			</div>
			<button className="todo-crossBtn" onClick={() => handleRemoveTodo(id)}>
				<CrossIcon />
			</button>
		</li>
	)
}
