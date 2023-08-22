
import { ListOfTodo } from "../types/types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodo,
    onMarkTodo: (id: number) => void ,
    onDeleteTodo: (id: number) => void ,
}

export const Todos = ({todos, onDeleteTodo, onMarkTodo}: Props) => {
  return (
    <ul>
    {todos.map(todo => (
        <Todo key={todo.id} onDeleteTodo={onDeleteTodo} onMarkTodo={onMarkTodo} {...todo} />
    ))}
</ul>
  )
}
