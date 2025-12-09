import { createSlice, nanoid } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState:{
    items: [],
    filter: "all",
  },
  reducers: {

    addtask :{
        reducer: (state, action) => {
            state.items.push(action.payload);   
    },
    prepare: (text) => {
        return {
            payload: {
                id: nanoid(),
                text,
                completed: false,
            },
        };
}
    },
    toggleTask :(state, action) => {
        const task = state.items.find((task) => task.id === action.payload);
       if (task) task.completed = !task.completed;
       
    },
    deleteTask :(state, action)=>{
        state.items = state.items.filter((task) => task.id !== action.payload);
    },
    changeFilter :(state, action)=>{
        state.filter = action.payload;
    },
  }



});


export const { addtask, toggleTask, deleteTask, changeFilter } = taskSlice.actions;
export default taskSlice.reducer;
