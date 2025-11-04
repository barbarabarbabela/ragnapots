import PocaoCard from "../components/pocao-card";
import TabelaFarmacologia from "../components/tabela-farmacologia";

export default function PocaoSelector() {
  return (
    <div className="max-w-5xl mx-auto p-10 bg-neutral-800 text-white rounded-2xl shadow-lg border border-neutral-700 space-y-12">
      <h1 className="text-4xl font-bold text-center text-emerald-400 drop-shadow-sm">
        Farmacologia Avançada
      </h1>
      <div className="space-y-5">
        <div className="">
          <p className="font-bold">Fórmula A: {""}</p>
          <p>
            <span className="text-sky-300">INT</span> + (
            <span className="text-amber-300">DES</span> ÷ 2) +{" "}
            <span className="text-pink-300">SOR</span> + Nv. de classe + Número
            aleatório entre 30 e 150 + (Nv. de base − 100) + (Nv. de Pesquisa de
            Poções × 5) + (Nv. de Proteção Química Total × Número aleatório
            entre 4 a 10)
          </p>
        </div>

        <div>
          <p className="font-bold">Fórmula B: {""}</p>
          <p>Taxa do item + Fator (tabela abaixo)</p>
        </div>

        <div className="flex justify-center ">
          <TabelaFarmacologia />
        </div>
      </div>

      <div>
        <PocaoCard />
        
      </div>
    </div>
  );
}
