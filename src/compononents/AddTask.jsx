import React, { useState } from 'react'
import { store } from '../app/store'
import { addtask } from '../features/task/taskSlice'
import { useDispatch } from 'react-redux'

function AddTask() {

    const [text, setText]= useState('')

    const dispatch = useDispatch();

    const submitTask= (e)=>{
        e.preventDefault()
        if(text.trim() ==='') return;
        dispatch(addtask(text))
        setText('')
    }
    

  return (
    <>
    <form className='w-full flex gap-2' onSubmit={submitTask}>
        <input
         type="text" 
         placeholder='Add Your Task' 
         className=' border-2 border-indigo-300 rounded-md p-2 
         outline-none focus:border-indigo-500 transition-all text-gray-950 text-2xl font-semibold flex-grow'
         value={text}
         onChange={(e)=> setText(e.target.value)}
         />
        <button type='submit' 
        className='bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all'
        >Add Task</button>
    </form>
    </>
  )
}

export default AddTask