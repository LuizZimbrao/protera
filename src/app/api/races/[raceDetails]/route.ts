import { NextRequest, NextResponse } from "next/server"

interface RaceDetails {
  params: {
    raceDetails: string
  }
}

// ${path.resolve(__dirname, '..', '..', '..', 'uploads', 'races', 'human.png')}

const races = [
  {
    id: `${Math.random()}`,
    imagePath: "",
    name: "Humano",
    description: "A raça humana é a mais comum e versátil de todo o rpg, você pode muito bem encontrar humanos com quaisquer classes, tais como caçadores, guerreiros, ladinos e outros. Essa é a classe mais indicada para iniciantes de rpg visto que é uma raça neutra, não possuindo malefícios e destacando-se pela versatilidade e baixa complexidade.",
    languages: "Todos os humanos instintivamente falam a linguagem comum e +2 linguagens.",
    extraInfo: "",
    status: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
      extra: 2
    },
    skills: {
      passive: [
        {
          name: "Benção de Deus",
          description: "O humano deve escolher uma benção de um Deus, podendo escolher entre as opções abaixo",
          effects: [
            "Ops, achei: Facilidade de encontrar itens mágicos +2 nesses testes.",
            "Dom da fala: O humano ganhará +2 em testes de convencimento de forma geral.",
            "O mercador: Se é pechincha que você quer é pechincha que terás, ganha +3 em testes para baixar o preço de algum produto.",
            "O pescador: Ganha +3 em testes de pescaria.",
            "O perito: o humano ganha +2 perícias a sua escolha.",
            "O duelista: Quando for lutar no 1v1 ganha +5 de iniciativa para começar o x1 com o pé direito."
          ],
        }
      ],
      active: [
        {
          name: "Raça superior",
          description: "Quando ativa essa habilidade permite ao humano ganhar +2 AC ou +2 CA",
          activationMethod: {
            action: true,
            movement: true,
            extraAction: false
          },
          duration: 2,
          cooldown: 3
        }
      ]
    }
  },
  {
    id: `${Math.random()}`,
    imagePath: "",
    name: "Elfo",
    description: "Dotados normalmente de arrogância e egocentrismo, os elfos são uma das criaturas mais antigas do planeta e grandes conhecedores das florestas.",
    languages: "Comum e elfica.",
    extraInfo: "",
    status: {
      strength: 0,
      dexterity: 1,
      constitution: 0,
      intelligence: -1,
      wisdom: 0,
      charisma: 0,
      extra: 2
    },
    skills: {
      passive: [
        {
          name: "Bem na mira",
          description: "o elfo naturalmente tem +1 de ac.",
          effects: [],
        }
      ],
      active: [
        {
          name: "Foco élfico",
          description: "Analisa um oponente e encontra seu ponto fraco, toda vez que acertar no ponto fraco (tem que passar em +3 da esquiva do inimigo) dará +2 de dano.",
          activationMethod: {
            action: true,
            movement: true,
            extraAction: false
          },
          duration: 2,
          cooldown: 4
        }
      ]
    }
  },
]

export async function GET(req: NextRequest, { params }: RaceDetails) {
  const { raceDetails } = params
  const filteredRace = races.find(({ name }) => name.toLowerCase() === raceDetails)
  
  return NextResponse.json(filteredRace, { status: 200 })
}
