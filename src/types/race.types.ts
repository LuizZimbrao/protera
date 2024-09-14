export type Race = {
  id: string,
  imagePath: string,
  name: string,
  description: string,
  languages: string,
  status: Status,
  skills: Skills
}

type Status = {
  strength: number,
  dexterity: number,
  constitution: number,
  intelligence: number,
  wisdom: number,
  charisma: number,
  extra: number
}

type Skills = {
  passive: Passive[],
  active: Active[]
}

type Passive = {
  name: string,
  description: string,
  effects: string[],
}

type Active = {
  name: string,
  description: string,
  activationMethod: ActivationMethod,
  duration: number,
  cooldown: number
}

type ActivationMethod = {
  action: boolean,
  movement: boolean,
  extraAction: boolean
}
