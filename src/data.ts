 const data = {
  livros: [
    { id: 6285, nome: "Livro de Farmacologia" },
    { id: 6284, nome: "Livro de Genética Vegetal" },
  ],

  secoes: [
    {
      titulo: "Livro de Farmacologia",
      prerequisitos: ["Livro de Farmacologia"],
      pocoes: [
        // {
        //   nome: "Poção Branca Especial",
        //   taxa: 10,
        //   materiais: [
        //     { id: 1092, nome: "Tubo de Ensaio", quantidade: 10 },
        //     { id: 504, nome: "Poção Branca", quantidade: 20 },
        //     { id: 509, nome: "Erva Branca", quantidade: 10 },
        //     { id: 970, nome: "Álcool", quantidade: 1 },
        //   ],
        // },
        // {
        //   nome: "Poção Vitata 500",
        //   taxa: 20,
        //   materiais: [
        //     { id: 1092, nome: "Tubo de Ensaio", quantidade: 10 },
        //     { id: 514, nome: "Uva", quantidade: 10 },
        //     { id: 518, nome: "Mel", quantidade: 10 },
        //     { id: 510, nome: "Erva Azul", quantidade: 10 },
        //   ],
        // },
        {
          label: "Suco Celular Enriquecido",
          icon: "/images/suco-celular.webp",
          taxa: 30,
          materiais: [
            { id: 1092, nome: "Tubo de Ensaio", quantidade: 10, preco: 2 },
            { id: 7455, nome: "Molho Picante", quantidade: 5, preco: 525 },
            { id: 656, nome: "Poção do Despertar", quantidade: 5, preco: 2200 },
            { id: 645, nome: "Poção da Concentração", quantidade: 5, preco: 1200 },
          ],
        },
        // {
        //   nome: "Poção de Recuperação",
        //   taxa: 40,
        //   materiais: [
        //     { id: 1092, nome: "Tubo de Ensaio", quantidade: 10 },
        //     { id: 610, nome: "Folha de Yggdrasil", quantidade: 1 },
        //     { id: 511, nome: "Erva Verde", quantidade: 20 },
        //     { id: 522, nome: "Mastela", quantidade: 1 },
        //     { id: 525, nome: "Panaceia", quantidade: 5 },
        //   ],
        // },
        {
          label: "Elixir Vermelho",
          icon: "/images/elixir-vermelho.webp",
          taxa: 80,
          materiais: [
            { id: 713, nome: "Garrafa Vazia", quantidade: 10, preco: 400 },
            { id: 1093, nome: "Garrafa de Poção", quantidade: 5, preco: 7 },
            { id: 11621, nome: "Xarope Vermelho", quantidade: 15, preco: 800 },
          ],
        },
        {
          label: "Elixir Azul",
          icon: "/images/elixir-azul.webp",
          taxa: 160,
          materiais: [
            { id: 713, nome: "Garrafa Vazia", quantidade: 10, preco: 400 },
            { id: 1093, nome: "Garrafa de Poção", quantidade: 5, preco: 7 },
            { id: 11624, nome: "Xarope Azul", quantidade: 15, preco: 7000 },
          ],
        },
        {
          label: "Elixir Dourado",
          icon: "/images/elixir-dourado.webp",
          taxa: 160,
          materiais: [
            { id: 713, nome: "Garrafa Vazia", quantidade: 10, preco: 400 },
            { id: 1093, nome: "Garrafa de Poção", quantidade: 5, preco: 7 },
            { id: 11623, nome: "Xarope Branco", quantidade: 10, preco: 1500 },
            { id: 11622, nome: "Xarope Amarelo", quantidade: 10, preco: 1200 },
          ],
        },
        // {
        //   nome: "Poção X",
        //   taxa: 160,
        //   materiais: [
        //     { id: 1092, nome: "Tubo de Ensaio", quantidade: 10 },
        //     { id: 607, nome: "Fruto de Yggdrasil", quantidade: 10 },
        //     { id: 969, nome: "Ouro", quantidade: 5 },
        //   ],
        // },
        // {
        //   nome: "Energético Físico",
        //   taxa: 120,
        //   materiais: [
        //     { id: 1092, nome: "Tubo de Ensaio", quantidade: 10 },
        //     { id: 507, nome: "Erva Vermelha", quantidade: 45 },
        //     { id: 608, nome: "Semente de Yggdrasil", quantidade: 5 },
        //   ],
        // },
        // {
        //   nome: "Energético Mágico",
        //   taxa: 120,
        //   materiais: [
        //     { id: 1092, nome: "Tubo de Ensaio", quantidade: 10 },
        //     { id: 510, nome: "Erva Azul", quantidade: 15 },
        //     { id: 608, nome: "Semente de Yggdrasil", quantidade: 5 },
        //   ],
        // },
      ],
    },

    // {
    //   titulo: "Livro de Genética Vegetal",
    //   prerequisitos: ["Livro de Genética Vegetal"],
    //   pocoes: [
    //     {
    //       nome: "Semente de Planta Selvagem",
    //       taxa: 30,
    //       materiais: [
    //         { id: 576, nome: "Fruta Espinhosa", quantidade: 10 },
    //       ],
    //     },
    //     {
    //       nome: "Semente de Planta Sanguessuga",
    //       taxa: 30,
    //       materiais: [
    //         { id: 1033, nome: "Raiz de Planta Carnívora", quantidade: 10 },
    //       ],
    //     },
    //     {
    //       nome: "Esporo de Cogumelo Explosivo",
    //       taxa: 15,
    //       materiais: [
    //         { id: 921, nome: "Esporo", quantidade: 10 },
    //         { id: 7033, nome: "Esporo Venenoso", quantidade: 5 },
    //         { id: 6244, nome: "Mistura de Pólvora", quantidade: 2 },
    //       ],
    //     },
    //   ],
    // },

    // {
    //   titulo: "Como Aumentar sua Força",
    //   prerequisitos: ["Nota: Como Aumentar sua Força"],
    //   pocoes: [
    //     {
    //       nome: "Poção Pequena de HP",
    //       taxa: 10,
    //       materiais: [
    //         { id: 713, nome: "Garrafa Vazia", quantidade: 10 },
    //         { id: 509, nome: "Erva Branca", quantidade: 10 },
    //         { id: 7455, nome: "Molho Picante", quantidade: 1 },
    //         { id: 528, nome: "Ração para Monstros", quantidade: 5 },
    //       ],
    //     },
    //     {
    //       nome: "Poção Média de HP",
    //       taxa: 20,
    //       materiais: [
    //         { id: 713, nome: "Garrafa Vazia", quantidade: 10 },
    //         { id: 509, nome: "Erva Branca", quantidade: 10 },
    //         { id: 508, nome: "Erva Amarela", quantidade: 10 },
    //         { id: 7455, nome: "Molho Picante", quantidade: 1 },
    //       ],
    //     },
    //     {
    //       nome: "Poção Grande de HP",
    //       taxa: 40,
    //       materiais: [
    //         { id: 713, nome: "Garrafa Vazia", quantidade: 10 },
    //         { id: 509, nome: "Erva Branca", quantidade: 15 },
    //         { id: 522, nome: "Mastela", quantidade: 3 },
    //         { id: 523, nome: "Água Benta", quantidade: 1 },
    //         { id: 7455, nome: "Molho Picante", quantidade: 1 },
    //       ],
    //     },
    //   ],
    // },

    // {
    //   titulo: "Como Aumentar sua Energia",
    //   prerequisitos: ["Nota: Como Aumentar sua Energia"],
    //   pocoes: [
    //     {
    //       nome: "Poção Pequena de SP",
    //       taxa: 10,
    //       materiais: [
    //         { id: 713, nome: "Garrafa Vazia", quantidade: 10 },
    //         { id: 568, nome: "Limão", quantidade: 10 },
    //         { id: 514, nome: "Uva", quantidade: 10 },
    //         { id: 7453, nome: "Molho Doce", quantidade: 1 },
    //       ],
    //     },
    //     {
    //       nome: "Poção Média de SP",
    //       taxa: 15,
    //       materiais: [
    //         { id: 713, nome: "Garrafa Vazia", quantidade: 10 },
    //         { id: 518, nome: "Mel", quantidade: 10 },
    //         { id: 510, nome: "Erva Azul", quantidade: 10 },
    //         { id: 7453, nome: "Molho Doce", quantidade: 1 },
    //       ],
    //     },
    //     {
    //       nome: "Poção Grande de SP",
    //       taxa: 20,
    //       materiais: [
    //         { id: 713, nome: "Garrafa Vazia", quantidade: 10 },
    //         { id: 526, nome: "Geleia Real", quantidade: 10 },
    //         { id: 510, nome: "Erva Azul", quantidade: 15 },
    //         { id: 7453, nome: "Molho Doce", quantidade: 1 },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default data;
