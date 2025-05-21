import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="py-2 shadow-sm">
      <div className="flex items-center justify-between container mx-auto ">
        <h2 className="text-xl">Logo</h2>
        <Button>Create todo</Button>
      </div>
    </header>
  );
}
