import React from 'react';
<<<<<<< HEAD

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to My Simple React App</h1>
      <p>Deploying React on Azure App Services!</p>
    </div>
=======
import Todo from './Todo';
import TodoForm from './TodoForm';
import './styles.css';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <>
    <h1>To-Do List</h1>
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo} />
        ))}
      </div>
    </div>
    </>
>>>>>>> other-repo/master
  );
}

export default App;
