import http from "@/lib/http";
import type { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import TodoItem from "./todo-item";

export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function getTodos() {
    const resp = await http.get("todos");
    setTodos(resp.data);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="p-3">
      <ol className="flex flex-col gap-2 max-w-xl mx-auto">
        {todos?.map((todo) => (
          <li key={todo.id}>
            <TodoItem {...todo} />
          </li>
        ))}
      </ol>
    </div>
  );
}
