// Interfaces
import { Todo } from "../../models/Todo";

// Estilos
import './TodoItem.css';

const TodoItem = ({ text, completed }: Todo) => {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>√</span>

      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>

      <span className="Icon Icon-delete">X</span>

    </li>
  )
}

export { TodoItem };