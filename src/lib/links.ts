import { icons } from '../assets/icons'

import {
  getChatsPageRoute,
  getEquipmentPageRoute,
  getInvestorsPageRoute,
  getNotificationsPageRoute,
  getProfilePageRoute,
  getProjectsPageRoute,
  getResourcesPageRoute,
  getRoomsPageRoute,
  getSettingsPageRoute,
  getSignInRoute,
  getSignOutRoute,
  getSignUpRoute,
  getSpecialistsPageRoute,
} from './routes'

export interface ILink {
  to: string
  textInLink: string
  icon: React.JSX.Element | null
  forAuth: boolean
  canSeeNotAuth: boolean
  color?: 'default' | 'red'
}

export const links: ILink[] = [
  {
    to: getProfilePageRoute(),
    textInLink: 'Профиль',
    icon: icons.profile(),
    forAuth: true,
    canSeeNotAuth: false,
  },
  {
    to: getProjectsPageRoute(),
    textInLink: 'Проекты',
    icon: icons.projects(),
    forAuth: true,
    canSeeNotAuth: true,
  },
  {
    to: getNotificationsPageRoute(),
    textInLink: 'Уведомления',
    icon: icons.notifications(),
    forAuth: true,
    canSeeNotAuth: false,
  },
  {
    to: getChatsPageRoute(),
    textInLink: 'Чаты',
    icon: icons.messages(),
    forAuth: true,
    canSeeNotAuth: false,
  },
  {
    to: getResourcesPageRoute(),
    textInLink: 'Ресурсы',
    icon: icons.resources(),
    forAuth: true,
    canSeeNotAuth: false,
  },
  {
    to: getSettingsPageRoute(),
    textInLink: 'Настройки',
    icon: icons.settings(),
    forAuth: true,
    canSeeNotAuth: false,
  },
  {
    to: getSignInRoute(),
    textInLink: 'Вход',
    icon: icons.signIn(),
    forAuth: false,
    canSeeNotAuth: true,
  },
  {
    to: getSignUpRoute(),
    textInLink: 'Регистрация',
    icon: icons.signUp(),
    forAuth: false,
    canSeeNotAuth: true,
  },
  {
    to: getSignOutRoute(),
    textInLink: 'Выход',
    icon: icons.exit(),
    forAuth: true,
    canSeeNotAuth: false,
    color: 'red',
  },
]

export const resourcesLinks = [
  {
    to: getSpecialistsPageRoute(),
    textInLink: 'Специалисты',
    icon: icons.specialists(),
    description: 'Надежные специалисты для продвижения вашего стартапа',
  },
  {
    to: getInvestorsPageRoute(),
    textInLink: 'Инвесторы',
    icon: icons.investors(),
    description: 'Когда нужны инвесторы для стартапа',
  },
  {
    to: getEquipmentPageRoute(),
    textInLink: 'Оборудование',
    icon: icons.equipment(),
    description: 'Выберите оборудование для закупки или в аренду',
  },
  {
    to: getRoomsPageRoute(),
    textInLink: 'Помещения и территории',
    icon: icons.rooms(),
    description: 'Можно найти территорию или помещение для выкупа или в аренду',
  },
]
