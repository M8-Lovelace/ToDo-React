// Importaciones
import { useState } from "react"

// Componentes
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton"
import { TodoCounter } from "./components/TodoCounter/TodoCounter"
import { TodoItem } from "./components/TodoItem/TodoItem"
import { TodoList } from "./components/TodoList/TodoList"
import { TodoSearch } from "./components/TodoSearch/TodoSearch"

const defaultTodos = [
  { text: 'Aprender React', completed: false },
  { text: 'Aprender React 2', completed: false },
  { text: 'Aprender React 3', completed: true },
]

const App = () => {
  // El "hook" método useState() devuelve un array con dos elementos
  const [search, setSearch] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  // Constantes que se enviarán al componente TodoCounter
  const completedTodos = todos.filter(todo => todo.completed === true).length
  const allTodos = todos.length

  // Validar si el input no tiene texto y mostrar todos los todos, de lo contrario, filtrarlos
  let searchedTodos = [];
  if (!(search.length >= 1)) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      if (todoText.includes(search.toLowerCase())) {
        return todo;
      }
    })
  }

  // Cambiar el estados de los ToDos
  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  // Eliminar un ToDo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoCounter completedTodos={completedTodos} allTodos={allTodos} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {searchedTodos.map(todo => (<TodoItem onToggle={() => toggleCompleteTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} key={todo.text} text={todo.text} completed={todo.completed} />))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export { App };