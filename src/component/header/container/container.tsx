import { useState } from 'react';
import Button from '../../button/button';
import TextField from '../../textfield/textfield';
import AddToDoItem from './additemform/additemform';
import './container.css';
import { ToDoItem } from './todoitem/todoitem';

const Container = () => {
  // const todos = ['Do 1', 'Do 2', 'Do 3'];
  const [todos, setTodos] = useState<string[]>(['Do 1', 'Do 2', 'Do 3']);

  const onAddClicked = (task: any) => {
    setTodos((prevTodos) => {
      return [...prevTodos, task];
    });
  };

  return (
    <>
      <AddToDoItem onAddClicked={onAddClicked} />
      {todos.map((todo, k) => (
        <ToDoItem key={k} todo={todo} />
      ))}
    </>
  );
};

export default Container;
