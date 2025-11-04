export default function TabelaFarmacologia() {
  const storedData = JSON.parse(localStorage.getItem("ragnapots-stats") || "{}");
  const nivelAtual = storedData?.farmacologia || 0;

  const tabela = [
    { nivel: 1, fator: 600, max: "7 poções" },
    { nivel: 2, fator: 580, max: "8 poções" },
    { nivel: 3, fator: 560, max: "8 poções" },
    { nivel: 4, fator: 540, max: "9 poções" },
    { nivel: 5, fator: 520, max: "9 poções" },
    { nivel: 6, fator: 500, max: "10 poções" },
    { nivel: 7, fator: 480, max: "10 poções" },
    { nivel: 8, fator: 460, max: "11 poções" },
    { nivel: 9, fator: 440, max: "11 poções" },
    { nivel: 10, fator: 420, max: "12 poções" },
  ];

  return (
    <div className="w-full flex justify-center mt-6">
      <table className="w-[50%] text-sm border border-neutral-700 rounded-xl shadow-lg">
        <thead className="bg-neutral-800 text-neutral-100">
          <tr>
            <th className="px-4 py-2 text-left">Nv.</th>
            <th className="px-4 py-2 text-left">Fator</th>
            <th className="px-4 py-2 text-left">Máx. de Poções</th>
          </tr>
        </thead>
        <tbody>
          {tabela.map((item) => {
            const isAtual = item.nivel === nivelAtual;
            return (
              <tr
                key={item.nivel}
                className={`border border-neutral-700
                  ${isAtual ? "bg-emerald-900/30 text-emerald-300 font-semibold" : ""}
                `}
              >
                <td className="px-4 py-2">{item.nivel}</td>
                <td className="px-4 py-2">{item.fator}</td>
                <td className="px-4 py-2">{item.max || "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
