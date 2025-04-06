export interface IMe {
  id: number | string
  email: string
  role: 'startuper' | 'specialist' | 'investor'
  name: string
  surname: string
  patronymic: string
  description: string
}

export type roleType = 'startuper' | 'specialist' | 'investor'
