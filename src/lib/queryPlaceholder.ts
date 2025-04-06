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

export const my_chats_data: IChat[] = [
  {
    id: 0,
    user1Id: 'hwk83h_nm',
    user2: {
      id: 945,
      email: 'someemail@gmail.com',
      role: 'specialist',
      name: 'Сергей',
      surname: 'Захаров',
      patronymic: 'Сергеевич',
      description: null,
      lastMessage: 'Совершенно верно',
    },
  },
  {
    id: 1,
    user1Id: 'hwk83h_nm',
    user2: {
      id: 161,
      email: 'someemail@gmail.com',
      role: 'specialist',
      name: 'Дарья',
      surname: 'Афонова',
      patronymic: 'Павловна',
      description: null,
      lastMessage: 'Надо уточнить',
    },
  },
  {
    id: 2,
    user1Id: 'hwk83h_nm',
    user2: {
      id: 6474,
      email: 'someemail@gmail.com',
      role: 'investor',
      name: 'Тимофей',
      surname: 'Тускляев',
      patronymic: 'Романович',
      description: null,
      lastMessage: 'Да, всё в силе!',
    },
  },
  {
    id: 3,
    user1Id: 'hwk83h_nm',
    user2: {
      id: 2436,
      email: 'someemail@gmail.com',
      role: 'specialist',
      name: 'Алина',
      surname: 'Соколова',
      patronymic: 'Андреевна',
      description: null,
      lastMessage: 'Здравствуйте! Мне стало интересно ваше предлож...',
    },
  },
]
