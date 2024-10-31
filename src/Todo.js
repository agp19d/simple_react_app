// todo.jsx
import React from 'react';

function Todo({ todo, index, remove }) {
    return (
        <div className="todo">
            {todo.text}
            <button 
                className="remove-btn" 
                onClick={() => remove(index)}
            >
                Remove
            </button>
        </div>
    );
}

export default Todo;
