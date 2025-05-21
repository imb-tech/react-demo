import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import CreateTodoPage from "./pages/create-todo";
import Header from "./components/layout/header";

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto pt-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateTodoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
