import { Card, Dropdown } from 'flowbite-react';
import { MainContext, useContext } from '../context';

const Todos = (props) => {
  const { todo, setTodo } = useContext(MainContext);
  const DeleteTodo = (id) => {
    setTodo((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <Card className='dark:!bg-[#1F2326] dark:!border-gray-500 break-words'>
      <div className='flex justify-end px-4 pt-4 dark:text-white'>
        <Dropdown inline={true} className='dark:!bg-[#1F2326]'>
          <Dropdown.Item>
            <button
              onClick={() => DeleteTodo(props.id)}
              className='block py-2 px-4 text-sm text-red-600'
            >
              Delete
            </button>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {props.title}
      </h5>
      <p className='font-normal  text-gray-700 dark:text-gray-400'>
        {props.desc}
      </p>
    </Card>
  );
};

export default Todos;
