// Importamos el css
import './TodoCounter.css'

const TodoCounter = ({ completedTodos, allTodos }) => {
  return (
    <>
      <h2 className='TodoCounter'>Has completado {completedTodos} de {allTodos} TODOs</h2>
    </>
  )
}

export { TodoCounter };