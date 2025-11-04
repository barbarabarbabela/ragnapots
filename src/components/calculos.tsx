import { calcularProducao } from "../utils/calcular-producao-farmacologia";

interface CalculosProps {
  pocao: {
    label: string;
    taxa: number;
  } | null;
  valorMercado: number;
  custoTotal: number;
}

export default function Calculos({ pocao, valorMercado, custoTotal }: CalculosProps) {
  const usuario = JSON.parse(localStorage.getItem("ragnapots-stats") || "{}");

  if (!pocao) {
    return (
      <div className="w-1/2 bg-neutral-800/80 border border-emerald-600/40 p-6 rounded-xl shadow-lg text-neutral-100">
        <p className="text-center text-neutral-400">Selecione uma poção</p>
      </div>
    );
  }

  const resultado = calcularProducao({ label: pocao.label, taxa: pocao.taxa }, usuario);

  const qtdMin = resultado.quantidadeMin || 1;
  const qtdMax = resultado.quantidadeMax || qtdMin;

  const custoPorPocao_min = qtdMin > 0 ? custoTotal / qtdMin : 0;
  const lucroUnitario_min = valorMercado - custoPorPocao_min;
  const lucroTotal_min = lucroUnitario_min * qtdMin;
  const margem_min = custoPorPocao_min > 0 ? (lucroUnitario_min / custoPorPocao_min) * 100 : 0;

  const fmt = (v: number) => v.toFixed(0); 
  const fmtPct = (v: number) => v.toFixed(2) + "%";

  return (
    <div className="w-1/2 bg-neutral-800/80 border border-emerald-600/40 p-6 rounded-xl shadow-lg text-neutral-100 flex flex-col gap-3">
      <h2 className="text-2xl font-bold mb-2 text-center text-emerald-300">
        Cálculos da Produção
      </h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-neutral-400">Poção:</span>
          <span className="font-semibold text-emerald-200">{pocao.label}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-neutral-400">Taxa do item:</span>
          <span className="font-semibold">{pocao.taxa}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-neutral-400">Fator de farmacologia:</span>
          <span className="font-semibold text-emerald-400">{resultado.fator}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-neutral-400">Fórmula B:</span>
          <span className="font-semibold text-emerald-400">
            {resultado.formulaB.toFixed(2)}
          </span>
        </div>

        <hr className="border-neutral-700 my-2" />

        <div className="text-center">
          <p className="text-neutral-400 mb-1">Faixa de produção possível:</p>
          <div className="flex justify-center gap-4">
            <span className="text-red-400 font-semibold">Mín: {qtdMin} poções</span>
            <span className="text-emerald-400 font-semibold">Máx: {qtdMax} poções</span>
          </div>
        </div>

        <hr className="border-neutral-700 my-2" />

        <div className="bg-neutral-900/60 p-3 rounded-lg space-y-2">
          <h3 className="text-sm text-emerald-300 font-semibold">Lucro mínimo</h3>

          <div className="flex justify-between">
            <span className="text-neutral-400">Custo total (1 receita):</span>
            <span className="font-semibold text-emerald-300">{custoTotal.toFixed(0)}z</span>
          </div>

          <div className="flex justify-between">
            <span className="text-neutral-400">Custo por poção (mín):</span>
            <span className="font-semibold text-emerald-300">{fmt(custoPorPocao_min)}z</span>
          </div>

          <div className="flex justify-between">
            <span className="text-neutral-400">Preço mercado (por poção):</span>
            <span className="font-semibold text-emerald-300">{fmt(valorMercado)}z</span>
          </div>

          <div className="flex justify-between">
            <span className="text-neutral-400">Lucro unitário (mín):</span>
            <span className={`font-semibold ${lucroUnitario_min >= 0 ? "text-emerald-400" : "text-red-400"}`}>
              {fmt(lucroUnitario_min)}z
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-neutral-400">Lucro total (mín):</span>
            <span className={`font-semibold ${lucroTotal_min >= 0 ? "text-emerald-400" : "text-red-400"}`}>
              {fmt(lucroTotal_min)}z
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-neutral-400">Margem (mín):</span>
            <span className={`font-semibold ${margem_min >= 0 ? "text-emerald-400" : "text-red-400"}`}>
              {fmtPct(margem_min)}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
