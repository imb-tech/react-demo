import { useNavigate } from "react-router";
import { Button } from "../ui/button";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="py-2 shadow-sm">
      <div className="flex items-center justify-between container mx-auto ">
        <h2 className="text-xl">Logo</h2>
        <Button onClick={() => navigate("/create")}>Create todo</Button>
      </div>
    </header>
  );
}
