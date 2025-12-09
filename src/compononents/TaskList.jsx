import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'
import { store } from '../app/store'

function TaskList() {
const {items, filter} = useSelector(state=> state.tasks)

const filteredItems = filter ==='completed' ? items.filter((task)=> task.completed) : items; 
  return (

   <ul className='w-full'>
    {filteredItems.map((task)=> (<Task key={task.id} task={task}/>)
    )}
 
   </ul>
  
  )
}

export default TaskList