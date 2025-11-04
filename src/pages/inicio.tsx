import { useState, useEffect } from "react";
import SelectInput from "../components/select-input";
import LabeledInput from "../components/labeled-input";
import StatInput from "../components/stat-input";

interface Stats {
  baseLevel: number;
  classLevel: number;
  INTbase: number;
  INTbonus: number;
  DESbase: number;
  DESbonus: number;
  SORbase: number;
  SORbonus: number;
  farmacologia: number;
  protecao: number;
  pesquisa: number;
  desconto: number
}

export default function Inicio() {
  const [stats, setStats] = useState<Stats>(() => {
    const saved = localStorage.getItem("ragnapots-stats");
    return saved
      ? JSON.parse(saved)
      : {
          baseLevel: 0,
          classLevel: 0,
          INTbase: 0,
          INTbonus: 0,
          DESbase: 0,
          DESbonus: 0,
          SORbase: 0,
          SORbonus: 0,
          farmacologia: 1,
          protecao: 1,
          pesquisa: 1,
        };
  });

  useEffect(() => {
    localStorage.setItem("ragnapots-stats", JSON.stringify(stats));
  }, [stats]);

  const handleChange = (field: keyof Stats, value: string | number) => {
    setStats({ ...stats, [field]: Number(value) });
  };

  const totalINT = stats.INTbase + stats.INTbonus;
  const totalDES = stats.DESbase + stats.DESbonus;
  const totalSOR = stats.SORbase + stats.SORbonus;

  return (
    <form className="max-w-5xl mx-auto p-10 bg-neutral-800 text-white rounded-2xl shadow-lg border border-neutral-700 space-y-12">
      <h1 className="text-4xl font-bold text-center text-emerald-400 drop-shadow-sm">
        Configuração de Stats
      </h1>

      {/* Níveis gerais */}
      <div className="flex justify-center gap-20">
        <StatInput
          label="Nível de Base"
          value={stats.baseLevel}
          onChange={(v) => handleChange("baseLevel", v)}
        />
        <StatInput
          label="Nível de Classe"
          value={stats.classLevel}
          onChange={(v) => handleChange("classLevel", v)}
        />
      </div>

      {/* Atributos principais */}
      <div className="grid grid-cols-3 gap-10">
        {[
          {
            label: "INT",
            base: "INTbase" as keyof Stats,
            bonus: "INTbonus" as keyof Stats,
            total: totalINT,
            color: "text-sky-300",
          },
          {
            label: "DES",
            base: "DESbase" as keyof Stats,
            bonus: "DESbonus" as keyof Stats,
            total: totalDES,
            color: "text-amber-300",
          },
          {
            label: "SOR",
            base: "SORbase" as keyof Stats,
            bonus: "SORbonus" as keyof Stats,
            total: totalSOR,
            color: "text-pink-300",
          },
        ].map((attr) => (
          <div
            key={attr.label}
            className="bg-neutral-700 p-6 rounded-xl shadow-md hover:shadow-emerald-500/20 transition"
          >
            <h3 className={`font-bold text-xl mb-4 ${attr.color}`}>
              {attr.label}
            </h3>

            <div className="space-y-3">
              <LabeledInput
                label="Base"
                value={stats[attr.base]}
                onChange={(v) => handleChange(attr.base, v)}
              />
              <LabeledInput
                label="Bônus"
                value={stats[attr.bonus]}
                onChange={(v) => handleChange(attr.bonus, v)}
              />
            </div>

            <p className="mt-4 text-lg font-semibold text-emerald-300">
              Total: <span className="text-white">{attr.total}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Habilidades */}
      <div className="flex justify-between bg-neutral-700 p-6 rounded-xl shadow-md">
        <SelectInput
          label="Farmacologia"
          value={stats.farmacologia}
          max={10}
          onChange={(v) => handleChange("farmacologia", v)}
        />
        <SelectInput
          label="Proteção Química Total"
          value={stats.protecao}
          max={5}
          onChange={(v) => handleChange("protecao", v)}
        />
        <SelectInput
          label="Pesquisa de Poções"
          value={stats.pesquisa}
          max={10}
          onChange={(v) => handleChange("pesquisa", v)}
        />
                <SelectInput
          label="Desconto"
          value={stats.desconto}
          max={10}
          onChange={(v) => handleChange("desconto", v)}
        />
      </div>
    </form>
  );
}
