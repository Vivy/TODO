import { useState } from 'react';
import Button from '../../../button/button';
import TextField from '../../../textfield/textfield';

type AddToDoItemType = {
  onAddClicked: (task: string) => void;
};

const AddToDoItem = ({ onAddClicked }: AddToDoItemType) => {
  const [task, setTask] = useState<string>('');

  const onTaskFieldChanges = (value: any) => {
    setTask(value);
  };

  const onClickAdd = () => {
    onAddClicked(task);
    setTask('');
  };

  return (
    <>
      <form action=''>
        <div className='flex'>
          <div className='flex-grow-1 mr-2'>
            <TextField value={task} onInput={onTaskFieldChanges} />
          </div>
          <div>
            <Button onClick={onClickAdd} primary>
              Add
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddToDoItem;
