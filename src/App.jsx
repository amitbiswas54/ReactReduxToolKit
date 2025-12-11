import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './compononents/AddTask'
import TaskList from './compononents/TaskList'
import FilterTask from './compononents/FilterTask'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="flex justify-center flex-col max-w-[600px] items-center gap-4 mb-8 mx-auto">
     <h2 className='text-indigo-700 lg:text-6xl text-4xl font-bold mb-8'>React Redux ToolKit</h2>
     <AddTask />
     <FilterTask/>
     <TaskList />
     <ToastContainer />
     </div>
    </>
  )
}

export default App
