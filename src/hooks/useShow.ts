import { Dispatch, SetStateAction, useRef, useState } from 'react'

function delayedStateHandler<T>(
  delay: number,
  stateFunc: Dispatch<SetStateAction<T>>,
  value: T
): void | number {
  const timeoutId = setTimeout(() => stateFunc(value), delay)
  return timeoutId
}

interface IUseShow {
  delay?: number
}

export const useShow = ({ delay = 0 }: IUseShow) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  if (delay === 0) {
    return {
      isShow,
      showElement: () => setIsShow(true),
      hideElement: () => setIsShow(false),
    }
  }
  const cleanupRef = useRef<void | number | null>(null)
  const showElement = () => {
    if (cleanupRef.current) {
      clearTimeout(cleanupRef.current)
    }
    setIsShow(true)
  }

  const hideElement = () => {
    cleanupRef.current = delayedStateHandler<typeof isShow>(delay, setIsShow, false)
  }

  return { isShow, showElement, hideElement }
}
