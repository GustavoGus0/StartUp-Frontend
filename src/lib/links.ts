import { icons } from '../assets/icons'

import {
  getChatsPageRoute,
  getEquipmentPageRoute,
  getInvestorsPageRoute,
  getLandsPageRoute,
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
  },
  {
    to: getInvestorsPageRoute(),
    textInLink: 'Инвесторы',
  },
  {
    to: getEquipmentPageRoute(),
    textInLink: 'Оборудование',
  },
  {
    to: getRoomsPageRoute(),
    textInLink: 'Помещения',
  },
  {
    to: getLandsPageRoute(),
    textInLink: 'Территория',
  },
]
