import { icons } from '../assets/icons'

import {
  getChatsPageRoute,
  getEquipmentPageRoute,
  getInvestorsPageRoute,
  getProfilePageRoute,
  getProjectsPageRoute,
  getResourcesPageRoute,
  getRoomsPageRoute,
  getSettingsPageRoute,
  getSpecialistsPageRoute,
} from './routes'

export const links = [
  {
    to: getProfilePageRoute(),
    textInLink: 'Профиль',
    icon: icons.profile(),
  },
  {
    to: getProjectsPageRoute(),
    textInLink: 'Проекты',
    icon: icons.projects(),
  },
  {
    to: getChatsPageRoute(),
    textInLink: 'Чаты',
    icon: icons.messages(),
  },
  {
    to: getResourcesPageRoute(),
    textInLink: 'Ресурсы',
    icon: icons.resources(),
  },
  {
    to: getSettingsPageRoute(),
    textInLink: 'Настройки',
    icon: icons.settings(),
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
    textInLink: 'Помещения и территория',
    icon: icons.rooms(),
    description: 'Можно найти территорию или помещение для выкупа или в аренду',
  },
]
