
import { ListOfTodo } from "../types/types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodo,
}

export const Todos = ({todos}: Props) => {
  
  return (
    <ul>
    {todos.map(todo => (
        <Todo key={todo.id}  {...todo} />
    ))}
</ul>
  )
}
