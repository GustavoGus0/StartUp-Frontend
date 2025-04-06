import { roleType } from '../types'

export const defineCyrRole = (
  role: roleType,
  { firstUpperCase = false }: { firstUpperCase?: boolean }
) => {
  if (role === 'startuper') {
    return firstUpperCase ? 'Стартапер' : 'стартапер'
  }
  if (role === 'specialist') {
    return firstUpperCase ? 'Специалист' : 'специалист'
  } else {
    return firstUpperCase ? 'Инвестор' : 'инвестор'
  }
}
