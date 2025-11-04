export const calcularDesconto = (precoItem: number) => {
  const storedData = JSON.parse(localStorage.getItem("ragnapots-stats") || "{}");
  const desconto = storedData?.desconto || 0;

  const descontos = {
    1: 7,
    2: 9,
    3: 11,
    4: 13,
    5: 15,
    6: 17,
    7: 19,
    8: 21,
    9: 23,
    10: 24,
  };

  const porcentagem = descontos[desconto as keyof typeof descontos] || 0;

  return precoItem * (1 - porcentagem / 100);
};
