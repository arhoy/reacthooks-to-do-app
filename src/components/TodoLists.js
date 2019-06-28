import React, { useContext } from 'react'
import ToDoContext from '../context';

const TodoLists = () => {
   const { state: { todos }, dispatch } =  useContext(ToDoContext);

   const statusChangeHandler = todo  => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: todo
        })
   }
   
    if ( todos && todos.length < 1) return (
        <div>
            <h1>Yay! You got nothing in the world to do</h1>
        </div>
    ) 

    const removeTodoHandler = id => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id
        })
    }

    const editTodoHandler = todo => {
        dispatch({
            type: "SET_CURRENT_TODO",
            payload:todo
        })
    }

    return (
        <ul className = "TodoList">
            {
                todos && todos.map( todo => (
                    <li 
                        key = {todo.id}
                        className = {`TodoList ${todo.complete ? 'TodoList__green' : 'TodoList__red' }`}
                        onDoubleClick = { statusChangeHandler.bind(this,todo) }
                    > 
                        <span className = "TodoList__span" >{todo.text} - </span>
                         { 
                             todo.complete ? 
                             <span className = "TodoList__complete">Completed</span>  : 
                             <span className = "TodoList__uncomplete">Todo!</span> 
                         }
                         
                         <div className="TodoList__tasks">
                                <button 
                                    className = "TodoList__remove"
                                    onClick = { removeTodoHandler.bind(this,todo.id) }
                                >
                                    <img className = "TodoList__img" src="https://icon.now.sh/close" alt="delete icon"/>
                                </button>

                                <button
                                    className = "TodoList__edit"
                                    onClick = { editTodoHandler.bind(this,todo) }
                                >
                                    <img src="https://icon.now.sh/edit" alt="Edit Icon"/>
                                </button>
                         </div>
                       
                    </li>
                ))
            }
        </ul>
    )
}



export default TodoLists
