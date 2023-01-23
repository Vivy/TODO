import './container.css';
import { ToDoItem } from './todoitem/todoitem';

const Container = () => {
  const todos = ['Do 1', 'Do 2', 'Do 3'];
  return (
    <>
      {todos.map((todo, k) => (
        <ToDoItem key={k} todo={todo} />
      ))}
    </>
  );
};

export default Container;
