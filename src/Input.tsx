/* eslint-disable @typescript-eslint/no-explicit-any */

import { signal } from "@preact/signals-react";

const input = signal("");

function Signals({ todos }: { todos: any }) {
  console.log("-- Input --")

  const handleAddTodo = (e: any) => {
    e.preventDefault();

    todos.value = [...todos.value, {
      text: input.value,
      completed: false
    }];

    input.value = "";
  };

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    input.value = e.target.value;
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input value={input.value} onChange={onHandleChange} />
        <button>Add</button>
      </form>
    </>
  );
}

export default Signals;
