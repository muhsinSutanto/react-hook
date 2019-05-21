import React, {useState} from 'react';

const Todo = () => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    const inputChangeHandler = event => {
        setTodoName(event.target.value);
    }

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName))
    }

    return ( <div>
        <input onClick={inputChangeHandler} type='text' placeholder='Todo'/>
        <button onClick={todoAddHandler} type='button'>Add</button>
        <ul>
            {todoList.map(todo => (
                <li>{todo}</li>
            ))}
        </ul>
    </div>  );
}
 
export default Todo;