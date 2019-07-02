import uuidv4 from 'uuid/v4';

export default function todosReducer(state, action) {
    switch(action.type) {
      case "TOGGLE_TODO":
          return {
             ...state,
             todos: state.todos.map(todo =>
                todo.id === action.payload.id ? { ...action.payload, complete: !action.payload.complete } : todo
             )
          }

      case "REMOVE_TODO":
          const isRemovedTodo = state.currentTodo.id === action.payload ? {} : state.currentTodo
          return {
              ...state,
              todos: state.todos.filter(todo => todo.id !== action.payload),
              currentTodo: isRemovedTodo,
              todoError: ''
          }

      case "TODO_ERROR":
          console.log('what the fuck',action.payload)
          return {
              ...state,
              todoError: action.payload
          }


      case "ADD_TODO":
          if( state.todos.findIndex(t => t.text === action.payload) > -1 ) {
              return {
                  ...state,
                  todoError: 'This to do has already been added!'
              }
          }
          
          const newTodo = { id: uuidv4(), text: action.payload, complete: false}
          return {
              ...state,
              todos:[newTodo,...state.todos],
              todoError: ''
          }

      case "UPDATE_TODO":
          return {
              ...state,
              todos: state.todos.map(todo => 
                todo.id === state.currentTodo.id ? { ...todo, text: action.payload } : todo
             ),
             currentTodo: {},
             todoError: ''
          }

      case "SET_CURRENT_TODO":
          return {
              ...state,
              currentTodo: action.payload,
              todoError: ''
          }
      default:
        return state;
    }
  }