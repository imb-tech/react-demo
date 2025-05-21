export type TodoStatus = "done" | "todo"

export type Todo = {
    id: number;
    title: string;
    status: TodoStatus
};
