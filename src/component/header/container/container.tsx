import Button from '../../button/button';
import TextField from '../../textfield/textfield';
import './container.css';
import { ToDoItem } from './todoitem/todoitem';

const Container = () => {
  const todos = ['Do 1', 'Do 2', 'Do 3'];
  return (
    <>
      <form action=''>
        <div className='flex'>
          <div className='flex-grow-1 mr-2'>
            <TextField />
          </div>
          <div>
            <Button primary>Add</Button>
          </div>
        </div>
      </form>
      {todos.map((todo, k) => (
        <ToDoItem key={k} todo={todo} />
      ))}
    </>
  );
};

export default Container;
