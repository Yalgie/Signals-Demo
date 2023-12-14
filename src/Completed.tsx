/* eslint-disable @typescript-eslint/no-explicit-any */

import { computed } from "@preact/signals-react";
import { TodoItem } from "./App";

function Completed({ todos }: { todos: any }) {
  console.log("-- Completed --")

  const completedTodos = computed(() => {
    return todos.value.filter((it: TodoItem) => it.completed).length;
  });

  return (
    <>
      {/* No Re-Render rendering signal */}
      {/* https://preactjs.com/guide/v10/signals#rendering-optimizations */}
      <p>Completed Todos: {completedTodos}</p>
    </>
  );
}

export default Completed;
