import { Flowbite, DarkThemeToggle } from 'flowbite-react';
import { MainContext } from './context';
import Todos from './components/Todos';
import { useEffect, useState, useThemeMode } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import CreateTodo from './components/CreateTodo';

function App() {
  const [animationParent] = useAutoAnimate();
  const [todo, setTodo] = useState([]);
  const data = {
    todo,
    setTodo,
  };
  return (
    <MainContext.Provider value={data}>
      <Flowbite>
        <DarkThemeToggle className='focus:ring-0 m-2' />
        <div className='container mx-auto w-11/12'>
          <div className='flex justify-end'>
            <CreateTodo />
          </div>
          <div
            className='w-full my-8 grid grid-cols-1 lg:grid-cols-4 gap-8'
            ref={animationParent}
          >
            {todo.map((value) => {
              return <Todos key={value.id} {...value} />;
            })}
          </div>
          {todo.length === 0 && (
            <div className='border-2 dark:border-gray-500 dark:text-[#FF4656] opacity-60 h-96 rounded-xl flex justify-center'>
              <div className='flex flex-col gap-3 items-center justify-center'>
                <svg
                  className='w-12 h-1w-12'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <h2 className='text-2xl'>Empty Todos</h2>
                <p className='text-lg'>Get started by creating todos.</p>
              </div>
            </div>
          )}
        </div>
      </Flowbite>
    </MainContext.Provider>
  );
}

export default App;
