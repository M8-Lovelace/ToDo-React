// Estilos
import "./TodoSearch.css";

const TodoSearch = ({ search, setSearch }) => {
  const onWrite = (event) => {
    setSearch(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      type="text"
      value={search}
      placeholder="Nuevo ToDo..."
      onChange={(event) => onWrite(event)}
    />
  );
};

export { TodoSearch };
