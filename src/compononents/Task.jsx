import React, { use } from 'react'
import { store } from '../app/store'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleTask } from '../features/task/taskSlice'


function Task({task}) {

  const dispatch = useDispatch();

  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   dispatch(deleteTask(task.id));
  // };

  return (
  <>
   
        <li 
       
        className='border-b-2 border-indigo-300 py-4 text-gray-900 text-xl font-medium w-full flex justify-between items-center'>
            {task.text}
            <div className='flex gap-2'>
            <button
             className='bg-green-500 px-3 flex items-center py-2 rounded-sm text-white font-semibold'
             onClick={()=>dispatch(toggleTask(task.id))}>
          {task.completed ? 'Completed' : 'Pending' }
        </button>
            <button className='bg-red-700 px-3 flex items-center py-2 rounded-sm text-white font-semibold'
            onClick={() => dispatch(deleteTask(task.id))}
            
            >Delete</button>
</div>
            {/* <button className='bg-red' onClick={(e)=handleDelete(e.task.id)}>Delete</button> */}
        </li>
  
  
  </>
  )
}

export default Task