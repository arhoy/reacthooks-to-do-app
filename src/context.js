import React from 'react';

// This is our GLOBAL STATE similar to Redux Store?
const ToDoContext = React.createContext({
    todos: [
        { id: 1, text: 'Go to work', complete: true },
        { id: 2, text: 'Work on website', complete: false },
        { id: 3, text: 'Go to sleep', complete: false }
    ],
    currentTodo: {},
    todoError: ''
})

export default ToDoContext;