interface UsuarioStats {
  baseLevel: number;
  classLevel: number;
  INTbase: number;
  INTbonus: number;
  DESbase: number;
  DESbonus: number;
  SORbase: number;
  SORbonus: number;
  pesquisa: number; // Nv. de Pesquisa de Poções
  protecao: number; // Nv. de Proteção Química Total
  farmacologia: number; // Nv. de Farmacologia
}

interface Pocao {
  label: string;
  taxa: number;
}

interface NivelFarmacologia {
  nivel: number;
  fator: number;
  max: number;
}

// tabela de farmacologia simplificada
const tabelaFarmacologia: NivelFarmacologia[] = [
  { nivel: 1, fator: 600, max: 7 },
  { nivel: 2, fator: 580, max: 8 },
  { nivel: 3, fator: 560, max: 8 },
  { nivel: 4, fator: 540, max: 9 },
  { nivel: 5, fator: 520, max: 9 },
  { nivel: 6, fator: 500, max: 10 },
  { nivel: 7, fator: 480, max: 10 },
  { nivel: 8, fator: 460, max: 11 },
  { nivel: 9, fator: 440, max: 11 },
  { nivel: 10, fator: 420, max: 12 },
];

export function calcularProducao(pocao: Pocao, usuario: UsuarioStats) {
  const {
    INTbase,
    INTbonus,
    DESbase,
    DESbonus,
    SORbase,
    SORbonus,
    baseLevel,
    classLevel,
    pesquisa,
    protecao,
    farmacologia,
  } = usuario;

  const INT = INTbase + INTbonus;
  const DES = DESbase + DESbonus;
  const SOR = SORbase + SORbonus;

  const nivelData = tabelaFarmacologia.find((n) => n.nivel === farmacologia);
  if (!nivelData) throw new Error("Nível de farmacologia inválido.");

  // Fórmula base (sem os aleatórios)
  const baseFormula =
    INT + DES / 2 + SOR + classLevel + (baseLevel - 100) + pesquisa * 5;

  // Extremos dos fatores aleatórios
  const random1Min = 30;
  const random1Max = 150;
  const random2Min = 4;
  const random2Max = 10;

  // Fórmulas A mínima e máxima
  const formulaA_min = baseFormula + random1Min + protecao * random2Min;
  const formulaA_max = baseFormula + random1Max + protecao * random2Max;

  const formulaB = pocao.taxa + nivelData.fator;

  const diffMin = formulaA_min - formulaB;
  const diffMax = formulaA_max - formulaB;

  const getQuantidade = (diff: number) => {
    if (diff >= 400) return nivelData.max;
    if (diff >= 300) return nivelData.max - 3;
    if (diff >= 100) return nivelData.max - 4;
    if (diff >= 1) return nivelData.max - 5;
    return nivelData.max - 6;
  };

  const quantidadeMin = getQuantidade(diffMin);
  const quantidadeMax = getQuantidade(diffMax);

  return {
    formulaA_min,
    formulaA_max,
    formulaB,
    diffMin,
    diffMax,
    quantidadeMin,
    quantidadeMax,
    max: nivelData.max,
    fator: nivelData.fator,
  };
}
