import { useState } from "react";
import Header from "./components/header";
import Main from "./pages/main";

function App() {
  const [currentPage, setCurrentPage] = useState("inicio");

  return (
    <div className="p-10">
      <Header onChangePage={setCurrentPage} currentPage={currentPage} />
      <Main currentPage={currentPage} />
    </div>
  );
}

export default App;