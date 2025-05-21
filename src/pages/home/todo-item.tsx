import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { Todo } from "@/types/todo";
import { Pencil, Trash } from "lucide-react";

export default function TodoItem(props: Todo) {
  const { status, title } = props;

  const isDone = status === "done";

  return (
    <div className="bg-primary/10 rounded-md p-4">
      <div className="flex items-center gap-3">
        <Checkbox className="border-black" defaultChecked={isDone} />
        <p className={cn("flex-1", isDone ? "line-through" : "")}>{title}</p>
        <div className="flex items-center gap-1">
          <Trash className="text-destructive cursor-pointer" size={16} />
          <Pencil className="text-primary cursor-pointer" size={16} />
        </div>
      </div>
    </div>
  );
}
