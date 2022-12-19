import { Button, Modal, Label, TextInput, Tooltip } from 'flowbite-react';
import { useState } from 'react';
import { MainContext, useContext } from '../context';
import { nanoid } from 'nanoid';

const CreateTodo = () => {
  const { todo, setTodo } = useContext(MainContext);

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodo((oldTodo) => [
      {
        id: nanoid(),
        title: title,
        desc: desc,
      },
      ...oldTodo,
    ]);
    setTitle('');
    setDesc('');
    setShow(false);
  };

  const ShowModal = () => {
    setShow(true);
  };
  const CloseModal = () => {
    setShow(false);
  };
  return (
    <>
      <Tooltip content='Create Todo'>
        <Button onClick={ShowModal} className='rounded-full !bg-[#FF4656]'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            ></path>
          </svg>
        </Button>
      </Tooltip>
      <Modal
        className='!h-screen'
        show={show}
        size='lg'
        popup={true}
        onClose={CloseModal}
      >
        <Modal.Header className='dark:bg-[#1F2326]' />
        <Modal.Body className='dark:bg-[#1F2326]'>
          <form onSubmit={handleSubmit}>
            <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
              <h3 className='text-xl text-center font-medium text-black dark:text-white'>
                Create Todo
              </h3>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='todo-title' value='Todo title' />
                </div>
                <TextInput
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  id='todo-title'
                  required={true}
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='todo-description' value='Todo description' />
                </div>
                <TextInput
                  value={desc}
                  onChange={(event) => setDesc(event.target.value)}
                  id='todo-description'
                  type='text'
                  required={true}
                />
              </div>

              <div className='w-full '>
                <Button type='submit' className='w-full !bg-[#FF4656]'>
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateTodo;
