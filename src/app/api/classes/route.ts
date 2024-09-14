const classes = [
  {
    id: "123",
    imagePath: "",
    name: "Caçador",
    category: "DPS",
    subCategory: "",
    description:
      "Caçadores são exímios atiradores e assassinos, recomendado para players que preferem uma gameplay mais escorregadia. os mesmos também tem a capacidade de fabricação de flechas de acordo com seu nível.",
    extraInfo: [
      "O caçador tem também a capacidade de fabricar flechas, sendo elas:",
      "Nível 2 -> Básica: fabrica 4 x nível flechas por dia.",
      "Nível 3 -> Venenosa: fabrica 3 x nível flechas por dia. (veneno da +1d4 de dano em 2 turnos) (aumenta 1d4 a cada 3 níveis).",
      "Nível 5 -> Explosiva: fabrica 1 x nível flechas por dia. (1d6 de dano em um espaço de 3 sqm) (aumenta 1d6 a cada 5 níveis)",
      "Nível 7 -> Penetrante: fabrica 2 flechas por dia. (mesmo dano porém ignora armadura)",
      "Nível 10 -> Infernal: fabrica 1 flecha a cada 3 dias. (ignora toda defesa do oponente, e causa queimadura causando 1d8 durante 3 turnos).",
    ],
    skills: {
      passive: [
        {
          level: 1,
          native: true,
          name: "Atirador de Elite",
          description: "O dano a distância do caçador é 1 dado acima do dano normaloutras classes tem o dano a distância reduzido em 2 dados.",
          effects: [
            "(Automatizador já está fazendo esse cálculo de forma automática).",
          ],
        },
        {
          level: 4,
          native: false,
          name: "Vamos à Caça",
          description: "Todo caçador ganha +3 de penetração de armadura a cada 2 níveis",
          effects: [],
        },
        {
          level: 7,
          native: false,
          name: "Bem na mira",
          description: "Ganha +3 de Acerto e Mira",
          effects: [],
        },
      ],
      active: [
        {
          level: 1,
          native: false,
          name: "Repelir",
          description:
            "Efetua um ataque de pressão que empurra o inimigo (1/2 DEST) SQM para trás e dando +2 de dano, caso acerte o inimigo em algum constructo como árvores / paredes ou até mesmo em outras pessoas (ambos acertados fazem o teste), o mesmo fará um teste de stun Dif: 11 + (Destreza / 2 - Força de vontade / 2).",
          activationMethod: {
            action: true,
            movement: false,
            extraAction: false,
          },
          duration: 0,
          cooldown: 3,
        },
        {
          level: 2,
          native: false,
          name: "Tiro concentrado",
          description:
            "O caçador se concentra durante 1 turno (sacrificando ação do turno) para dar o dobro do dano +2 com +3 AC.",
          activationMethod: {
            action: true,
            movement: false,
            extraAction: false,
          },
          duration: 0,
          cooldown: 3,
        },
        {
          level: 3,
          native: false,
          name: "Flecha Perfurante",
          description:
            "Atira uma flecha que atravessa todos os inimigos em uma linha reta, causando seu dano a distância em cada um.",
          activationMethod: {
            action: true,
            movement: false,
            extraAction: false,
          },
          duration: 0,
          cooldown: 3,
        },
        {
          level: 5,
          native: false,
          name: "Cegueira",
          description:
            "Coloca sobre uma flecha um tipo de feitiço, que faz com que a flecha ao atingir o oponente explode milésimos antes em poeira negra, deixando o oponente com penalidade de -4AC",
          activationMethod: {
            action: true,
            movement: false,
            extraAction: false,
          },
          duration: 2,
          cooldown: 4,
        },
        {
          level: 6,
          native: false,
          name: "Rajada de flechas/Tiro Duplo",
          description:
            "Atire 3 flechas em 3 oponentes ou 2 flechas em somente 1 oponente.",
          activationMethod: {
            action: true,
            movement: false,
            extraAction: false,
          },
          duration: 0,
          cooldown: 4,
        },
      ],
    },
  },
];

export async function GET() {
  return Response.json(classes);
}
