import { signal } from "@preact/signals-react";
import Input from "./Input";
import Todos from "./Todos";
import Completed from "./Completed";

export type TodoItem = {
  text: string;
  completed: boolean;
};

const todos = signal<TodoItem[]>([]);

function App() {
  console.log("-- App --");

  return (
    <>
      <Completed todos={todos} />
      <Input todos={todos} />
      <Todos todos={todos} />
    </>
  );
}

export default App;
