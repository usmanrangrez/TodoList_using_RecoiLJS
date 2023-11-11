import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Todo from "./Todo";
import { totalTodos } from "../state/selectors/TotalTodos";

const Todos = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputText, setInputText] = useState("");
  const count = useRecoilState(totalTodos);

  const addTodo = () => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          text: inputText,
        },
      ];
    });
    setInputText("");
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <main>
      <input
        value={inputText}
        onChange={handleInputChange}
        type="text"
        id="todoInput"
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodos}>Clear Todos</button>

      {todos.map((todo) => {
        return <Todo key={todo.id} text={todo.text} id={todo.id} />;
      })}
      <p>Total no of todos is:{count}</p>
    </main>
  );
};

export default Todos;
