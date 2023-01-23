import Button from '../../../button/button';
import CheckBox from '../../../checkbox/checkbox';
import './todoitem.css';

type ToDoType = {
  todo: string;
};
export const ToDoItem = ({ todo }: ToDoType) => {
  return (
    <div className='TodoItem flex'>
      <div className='mt-2 mr-1'>
        <CheckBox />
      </div>
      <div className='mr-auto mt-auto mb-auto'>{todo}</div>
      <div>
        <Button transparent>
          <i className='fa fa-pencil'></i>
        </Button>
      </div>
      <div>
        <Button transparent>
          <i className='fa fa-trash'></i>
        </Button>
      </div>
    </div>
  );
};
