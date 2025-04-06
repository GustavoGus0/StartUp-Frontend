export interface IProject {
  id: number | string
  title: string
  description: string
  images?: HTMLImageElement | React.JSX.Element | null | string
  isMy: boolean
  searchesFor: resourceType[] | []
}

export interface IChat {
  id: string | number
  user1Id: string | number
  user2Id: string | number
}

export type roleType = 'startuper' | 'specialist' | 'investor'
export type competenceType = 'wood' | 'metal' | 'IT' | 'cars' | 'aircrafts' | 'barman' | 'waiter'
export type resourceType = 'specialists' | 'investors' | 'equipment' | 'rooms and lands'

export interface IUser {
  id: number | string
  email: string
  role: 'startuper' | 'specialist' | 'investor'
  name: string
  surname: string
  patronymic: string
  description: string
}

export interface IStartuper extends IUser {
  // HIS OWN PROJECTS
  projects: IProject[] | null
}

export interface ISpecialist extends IUser {
  // PROJECTS HE WORKS IN
  projects: IProject[]
  competencies: competenceType[] | null
}

export interface IInvestor extends IUser {
  // PROJECTS HE INVESTS TO
  projects: IProject[] | null
}

export interface ISpecialist {
  id: number | string
  email: string
  role: 'startuper' | 'specialist' | 'investor'
  name: string
  surname: string
  patronymic: string
  description: string
}
