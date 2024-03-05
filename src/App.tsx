import React, { useState } from 'react';
import './App.css';
import Input from './component/input';
import { Todos } from './Types/types';
import Message from './component/Message';

const App:React.FC=()=> {

const [todo,setTodo]=useState<string>('')
const [todos,setTodos]=useState<Todos[]>([])

const addMessage=()=>{
  if(todo) setTodos([...todos,{message:todo,id:todos.length+1}])
  setTodo("")
}

const deleteMessage=(id:number)=>{
  setTodos(todos.filter(todo=>todo.id!=id))
}

console.log("Todos: ",todos)
  return (
    <div className="App bg-slate-700 h-full w-full ">
     <div className='text-2xl font-extrabold text-center mb-5'>
      To - Do App      
      </div>
      <div>
       <Input addMessage={addMessage} todo={todo} setTodo={setTodo}/>
       <Message deleteMessage={deleteMessage} todos={todos}/>
        </div>
    </div>
  );
}

export default App;
