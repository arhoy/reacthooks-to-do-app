import React, { useContext, Fragment } from 'react'
import ToDoContext from '../context';

const TodoLists = () => {
   const { state: { todos }, dispatch } =  useContext(ToDoContext);

   const statusChangeHandler = todo  => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: todo
        })
   }
    

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
    <Fragment>
    <div className = "TodoList__count">
        {
            todos && todos.length > 0 ?
                <h2> todo tasks left: <span className = "TodoList__underline">{ todos.length }</span>   </h2> :
                <h2> No tasks left to complete... yay!</h2> 
        }
    </div>
     <ul className = "TodoList">
            {
                todos && todos.map( todo => (
                    <li 
                        key = {todo.id}
                        className = {`TodoList ${todo.complete ? 'TodoList__green' : 'TodoList__red' }`}
                        onDoubleClick = { statusChangeHandler.bind(this,todo) }
                    > 
                        <div className = "TodoList__text"> { todo.text } </div>
                         { 
                             todo.complete ? 
                             <div className = "TodoList__complete">Completed</div>  : 
                             <div className = "TodoList__uncomplete">Todo!</div> 
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
                                    <img className = "TodoList__img" src="https://icon.now.sh/edit" alt="Edit Icon"/>
                                </button>
                         </div>
                       
                    </li>
                ))
            }
        </ul>

    </Fragment>
       
    )
}



export default TodoLists
