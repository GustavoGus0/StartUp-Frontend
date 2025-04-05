import {
  getChatsPageRoute,
  getEquipmentPageRoute,
  getInvestorsPageRoute,
  getLandsPageRoute,
  getProfilePageRoute,
  getProjectsPageRoute,
  getRoomsPageRoute,
  getSettingsPageRoute,
  getSpecialistsPageRoute,
} from './routes'

export const links = [
  {
    to: getProjectsPageRoute(),
    textInLink: 'Проекты',
  },
  {
    to: getProfilePageRoute(),
    textInLink: 'Профиль',
  },
  {
    to: getChatsPageRoute(),
    textInLink: 'Чаты',
  },
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
    textInLink: 'Участки',
  },
  {
    to: getSettingsPageRoute(),
    textInLink: 'Настройки',
  },
]
