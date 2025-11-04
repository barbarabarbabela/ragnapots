import { GiPotionBall } from "react-icons/gi";

interface HeaderProps {
  onChangePage: (page: string) => void;
  currentPage: string
}

export default function Header({ onChangePage, currentPage }: HeaderProps) {

  console.log("current", currentPage)
  return (
    <div className="bg-neutral-700 p-5 flex items-center gap-28">
      <h1 className="text-2xl font-bold flex items-center gap-3">
        <GiPotionBall />
        ragnapots
      </h1>

      <menu className="flex gap-10 text-white">
      <h2
          className={`cursor-pointer hover:text-neutral-300 ${currentPage ==='inicio' && "font-extrabold text-green-400"}`}
          onClick={() => onChangePage("inicio")}
        >
          início
        </h2>
        <h2
          className={`cursor-pointer hover:text-neutral-300 ${currentPage ==='farmacologia' && "font-extrabold text-green-400"}`}
          onClick={() => onChangePage("farmacologia")}
        >
          farmacologia avançada
        </h2>
        <h2
          className={`cursor-pointer hover:text-neutral-300 ${currentPage ==='pocao' && "font-extrabold text-green-400"}`}
          onClick={() => onChangePage("pocao")}
        >
          criar poção
        </h2>
        <h2
          className={`cursor-pointer hover:text-neutral-300 ${currentPage ==='culinaria' && "font-extrabold text-green-400"}`}
          onClick={() => onChangePage("culinaria")}
        >
          culinária avançada
        </h2>
      </menu>
    </div>
  );
}
