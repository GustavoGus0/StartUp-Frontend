import { IChat, IProject } from '../types'

export const projects_data: IProject[] = [
  {
    id: 0,
    title: 'Художественная резка по дереву',
    description:
      'Классный проект, нацеленный на оказание услуг по выстриганию и вырезанию из древесины различных скульптур, фигурок, частей и объектов искусства на заказ.',
    images: null,
    isMy: false,
    searchesFor: ['specialists', 'equipment'],
  },
  {
    id: 1,
    title: 'Пивоваренный завод',
    description:
      'Организация работы пивоваренного завода. Немецкое и чешское пиво по традиционным рецептам.',
    images: null,
    isMy: false,
    searchesFor: ['specialists', 'investors', 'rooms and lands'],
  },
  {
    id: 2,
    title: 'Маникюрный салон',
    description: 'Замечательный маникюрный салон в центре города! Пока копятся деньги...',
    images: null,
    isMy: false,
    searchesFor: ['investors'],
  },
]

export const chats_data: IChat = [
  {
    id: 0,
    user1Id: 'hwk83h_nm',
    user2Id: '55te_bwa32',
  },
]
