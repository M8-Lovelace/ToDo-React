import { Todo } from "../../models/Todo";

const TodoItem = ({ text }: Todo) => {
  return (
    <li>
      <span>c</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  )
}

export { TodoItem };