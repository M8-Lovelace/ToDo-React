interface Props {
  children: React.ReactNode;
}

const TodoList = ({ children }: Props) => {
  return (
    <section>
      <ul>
        {children}
      </ul>
    </section>
  )
}

export { TodoList };