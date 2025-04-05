export const useOnceAnimation = (localStorageValue: string) => {
  const needAnimation = localStorage.getItem(localStorageValue) === 'true' ? false : true
  const setElementAnimated = () => {
    localStorage.setItem(localStorageValue, 'true')
  }
  const handleBeforeUnload = () => localStorage.setItem(localStorageValue, 'false')

  const handleReloadPage = () => window.addEventListener('beforeunload', handleBeforeUnload)

  const removeListener = window.removeEventListener('beforeunload', handleBeforeUnload)

  return { needAnimation, setElementAnimated, handleReloadPage, removeListener }
}
