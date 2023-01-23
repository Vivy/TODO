import { FormEventHandler, useState } from 'react';
import { useAutoFocus } from '../../../../customhooks/useautofocus';
import Button from '../../../button/button';
import TextField from '../../../textfield/textfield';

type AddToDoItemType = {
  onAddClicked: (task: string) => void;
};

const AddToDoItem = ({ onAddClicked }: AddToDoItemType) => {
  const inputFieldRef = useAutoFocus();

  const [task, setTask] = useState<string>('');

  const onTaskFieldChanges = (value: any) => {
    setTask(value);
  };

  const onFormSubmitted: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onAddClicked(task);
    setTask('');
  };

  return (
    <>
      <form onSubmit={onFormSubmitted}>
        <div className='flex'>
          <div className='flex-grow-1 mr-2'>
            <TextField
              ref={inputFieldRef}
              value={task}
              onInput={onTaskFieldChanges}
            />
          </div>
          <div>
            <Button type='submit' primary>
              Add
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddToDoItem;
