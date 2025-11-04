import FarmacologiaAvancada from "./farmacologia-avancada";
import Inicio from "./inicio";

interface MainProps {
  currentPage: string;
}

export default function Main({ currentPage }: MainProps) {

  return (
    <div className="p-10 text-white">
      {currentPage === "inicio" && <Inicio /> }
      {currentPage === "farmacologia" && <FarmacologiaAvancada /> }
    </div>
  );
}