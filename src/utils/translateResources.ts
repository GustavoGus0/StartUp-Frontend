export function translateResources(
  categories: string[],
  fallback: string = 'Неизвестная категория'
): string[] {
  const translationMap: Record<string, string> = {
    specialists: 'Специалистов',
    investors: 'Инвесторов',
    'rooms and lands': 'Помещения и Территории',
    equipment: 'оборудования',
  }

  return categories.map((category) => translationMap[category] || fallback)
}
