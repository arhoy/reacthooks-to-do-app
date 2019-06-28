import React, { useState, useContext, useEffect, Fragment } from 'react'
import ToDoContext from '../context';



const TodoForm = () => {
    const { state: { todos, currentTodo = {} }, dispatch } = useContext(ToDoContext);
  
    const [ todo,setTodo ] = useState('');
    const [ error, setError ] = useState(null)

    useEffect( ()=> {
        if(currentTodo.text){
            setTodo(currentTodo.text)
        } else {
            setTodo('')
        }
    },[currentTodo.id])

    const hasDuplicates = currentTodoText => {
        todos.forEach(todo => {
            if(todo.text === currentTodoText) {
                return true
            }
            return false
        });
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
            setError('Please enter a non empty task')
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
            {
                error && <div> { error } </div>
            }

        </Fragment>
      
    )
}


export default TodoForm
