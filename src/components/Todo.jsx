import { useSetRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";

const Todo = ({ text, id }) => {
  const setTodos = useSetRecoilState(todoState);

  const deleteTodo = () => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== id;
      });
    });
  };
  return (
    <div>
      <p>{text}</p>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
};

export default Todo;
