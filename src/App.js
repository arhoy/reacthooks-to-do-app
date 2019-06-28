import React, { useContext, useReducer } from 'react';


import './App.scss';
import ToDoContext from './context';
import todosReducer from './reducer';
import TodoLists from './components/TodoLists';
import TodoForm from './components/TodoForm';



const  App = () => {

  const initialState = useContext(ToDoContext);
  const [ state, dispatch ] = useReducer(todosReducer,initialState);  

  return (
    <ToDoContext.Provider
      value = {{state, dispatch}}
    >
      <div className="App">
         <h1>Simple To Do With Hooks</h1>
         <p>Double Click on Task to change completion status</p>
         <TodoForm/>
         <TodoLists/>
      </div>
    </ToDoContext.Provider>
  
  );
}

export default App;
