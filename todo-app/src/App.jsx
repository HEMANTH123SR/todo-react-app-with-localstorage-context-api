import React, { useState } from "react";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [todos, setDodos] = useState([]);

  const addTodo = (todo) => {
    setDodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const upDatedTodo = (todo, id) => {
    setDodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const delTodo = (id) => {
    setDodos((prev)=>prev.filter((prevTodo)=>(
      prevTodo.id !== id
    )))
  };

  const toggleComplete = () => {};
  
  return (
    <TodoProvider
      value={{ todos, addTodo, upDatedTodo, delTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
