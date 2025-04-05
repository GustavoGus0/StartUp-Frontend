import {
  getChatsPageRoute,
  getProfilePageRoute,
  getProjectsPageRoute,
  getResourcesPageRoute,
  getSettingsPageRoute,
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
