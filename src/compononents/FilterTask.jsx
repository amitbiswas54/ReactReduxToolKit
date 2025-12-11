import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../features/task/taskSlice'

function FilterTask() {
    const filter = useSelector(state=> state.tasks.filter)
    console.log('Current Filter:', filter);

    const dispatch = useDispatch();

  return (
    <div className='flex justify-center gap-4'>
        <button onClick={()=>dispatch(changeFilter('All'))}
        className={`px-4 py-2 flex items-center rounded-md text-white border-2 cursor-pointer border-indigo-500
            ${filter === "All"? 'bg-blue-600': 'bg-green-600' }`}
        >All</button>
        <button 
        onClick={()=>dispatch(changeFilter('completed'))}
         className={`px-4 py-2 flex items-center text-white cursor-pointer border-indigo-500 border-2 rounded-md ${filter === "completed"? 'bg-blue-600': 'bg-green-600' }`}
         >Completed</button>
    </div>
  )
}

export default FilterTask