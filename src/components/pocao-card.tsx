import { useState } from "react";
import data from "../data";
import DropdownPotionSelect from "./dropdown";
import { calcularDesconto } from "../utils/calcular-desconto";
import Calculos from "./calculos";
import StatInput from "./stat-input";

interface Pocao {
  label: string;
  icon: string;
  taxa: number;
  materiais: {
    id: number;
    nome: string;
    quantidade: number;
    preco: number;
  }[];
}

export default function PocaoCard() {
  const secoes = data.secoes[0];
  const pocoes: Pocao[] = secoes.pocoes;

  const [pocaoSelecionada, setPocaoSelecionada] = useState<Pocao | null>(null);
  const [valorMercado, setValorMercado] = useState(0);

  const options = pocoes.map((p) => ({
    label: p.label,
    icon: p.icon,
  }));

  const handleChange = (value: string) => {
    const encontrada = pocoes.find((p) => p.label === value) || null;
    setPocaoSelecionada(encontrada);
  };

  const custoTotal =
    pocaoSelecionada?.materiais.reduce((total, m) => {
      const precoComDescontoFloat = calcularDesconto(m.preco);
      const precoUnitario = Math.floor(precoComDescontoFloat);
      const totalItem = precoUnitario * m.quantidade;
      return total + totalItem;
    }, 0) || 0;

  return (
    <div className="space-y-5">
      <div className="flex gap-5">
        <DropdownPotionSelect
          label="Escolha sua Poção"
          options={options}
          value={pocaoSelecionada?.label || ""}
          onChange={handleChange}
        />
        <div className="w-1/4">
          <StatInput
            label="Valor no mercado"
            value={valorMercado}
            onChange={setValorMercado}
          />
        </div>
      </div>

      {pocaoSelecionada && (
        <div className="flex gap-10">
          <div className="bg-neutral-800/80 border border-emerald-600/40 p-6 rounded-xl w-fit">
            <h2 className="text-2xl font-bold mb-4 text-center text-emerald-300">
              {pocaoSelecionada.label}
            </h2>

            <div className="flex justify-center mb-4">
              <img
                src={pocaoSelecionada.icon}
                alt={pocaoSelecionada.label}
                className="w-24 h-28"
              />
            </div>

            <div className="text-center">
              <p>
                Taxa: <span>{pocaoSelecionada.taxa}</span>
              </p>
            </div>

            <div className="mt-6">
              <p className="font-semibold mb-3 text-center text-emerald-200">
                Materiais necessários:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-emerald-700/40 text-sm rounded-lg overflow-hidden shadow-md shadow-emerald-900/20">
                  <thead>
                    <tr className="bg-emerald-700/20 text-emerald-300 uppercase text-xs tracking-wide">
                      <th className="px-3 py-2 text-left border-b border-emerald-700/40">
                        Material
                      </th>
                      <th className="px-3 py-2 text-right border-b border-emerald-700/40">
                        Quantidade
                      </th>
                      <th className="px-3 py-2 text-right border-b border-emerald-700/40">
                        Preço Unitário
                      </th>
                      <th className="px-3 py-2 text-right border-b border-emerald-700/40">
                        Preço Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pocaoSelecionada.materiais.map((m) => {
                      const precoFloat = calcularDesconto(m.preco);
                      const precoUnit = Math.floor(precoFloat);
                      const totalItem = precoUnit * m.quantidade;

                      return (
                        <tr
                          key={m.id}
                          className="hover:bg-emerald-800/20 transition-colors border-b border-emerald-800/30"
                        >
                          <td className="px-3 py-2">{m.nome}</td>
                          <td className="px-3 py-2 text-right text-emerald-300 font-semibold">
                            x{m.quantidade}
                          </td>
                          <td className="px-3 py-2 text-right text-emerald-400 font-semibold">
                            {precoUnit}z
                          </td>
                          <td className="px-3 py-2 text-right text-emerald-400 font-semibold">
                            {totalItem}z
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-emerald-800/20 font-bold text-emerald-300 border-t border-emerald-700/40">
                      <td colSpan={3} className="px-3 py-2 text-right">
                        Total para uma receita:
                      </td>
                      <td className="px-3 py-2 text-right">
                        {custoTotal.toFixed(0)}z
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <Calculos
            pocao={pocaoSelecionada}
            valorMercado={valorMercado}
            custoTotal={custoTotal}
          />
        </div>
      )}
    </div>
  );
}
