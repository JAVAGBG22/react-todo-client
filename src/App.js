import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import HelloWorldService from "./services/HelloWorldService";
import TodoService from "./services/TodoService";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //getHelloWorld();
    getTodos();
  }, []);

  const getTodos = () => {
    TodoService.getTodos().then((response) => {
      setTodos(response.data);
      console.log(response.data);
    });
  };

  const getHelloWorld = () => {
    HelloWorldService.getHelloWorld().then((response) => {
      console.log(response.data);
    });
  };
  /*
  const addTodo = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    setTodos([
      ...todos,
      {
        text: inputValue,
        id: uuidv4(),
      },
    ]);

    setInputValue("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };*/

  return (
    <>
      <Header />
      <div className="container">
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
