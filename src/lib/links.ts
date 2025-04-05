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
  },
  {
    to: getProjectsPageRoute(),
    textInLink: 'Проекты',
  },
  {
    to: getChatsPageRoute(),
    textInLink: 'Чаты',
  },
  {
    to: getResourcesPageRoute(),
    textInLink: 'Ресурсы',
  },
  {
    to: getSettingsPageRoute(),
    textInLink: 'Настройки',
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
