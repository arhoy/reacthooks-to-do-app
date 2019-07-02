import React, { useState, useContext, useEffect, Fragment } from 'react'
import ToDoContext from '../context';



const TodoForm = () => {
    const { state: { currentTodo = {}, todoError }, dispatch } = useContext(ToDoContext);
  
    const [ todo,setTodo ] = useState('');

    useEffect( ()=> {
        if(currentTodo.text){
            setTodo(currentTodo.text)
        } else {
            setTodo('')
        }
    },[currentTodo.id, currentTodo.text])

    const inputErrorHandler = msg => {
        dispatch({
            type: "TODO_ERROR",
            payload:msg
        })
    }

    const TodoFormHandler = e => {
        e.preventDefault();  

        // check to make sure text not empty
        if(todo && todo.trim() !== '') {
            if( currentTodo.text ) {
                dispatch({
                    type:"UPDATE_TODO",
                    payload: todo
                })
            } else {
                dispatch({
                    type: "ADD_TODO",
                    payload: todo
                })
            }
        } 
        else {
           inputErrorHandler('Please enter a non empty todo task')
        }

       
        setTodo('');
    }
    
    const TodoInputHandler = e => {
        setTodo(e.target.value);
    }
    

    return (
        <Fragment>
            <form 
                className = "TodoForm"
                onSubmit = { TodoFormHandler }
            >
                <input 
                    value = { todo } 
                    onChange = {TodoInputHandler} 
                    className = "TodoForm__input" 
                    type="text"
                />

            </form>

            { todoError !== '' && <div> { todoError } </div> }
            

        </Fragment>
      
    )
}


export default TodoForm
