/* eslint-disable @typescript-eslint/no-explicit-any */

import { TodoItem } from "./App";

function Todos({ todos }: { todos: any }) {
  console.log("-- Todos --")

  const onHandleChange = (_, todo: TodoItem) => {
    todos.value = todos.value.map((it:TodoItem) => {
      if (it.text === todo.text) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return it;
    })
  };

  return (
    <>
      {todos.value.map((todo: TodoItem, i: number) => {
        return <div key={`todo-${i}`}>
          <p>{todo.text}</p>
          <input type="checkbox" checked={todo.completed} onChange={(e) => onHandleChange(e, todo)}/>
        </div>;
      })}
    </>
  );
}

export default Todos;
