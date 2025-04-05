import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

export interface IMe {
  id: number | string
  name: string
  surname: string
  patronymic: string
}

export type AppContext = {
  me?: IMe
  setMe?: Dispatch<SetStateAction<IMe | undefined>>
}

const AppReactContext = createContext<AppContext>({})

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [me, setMe] = useState<IMe | undefined>({
    id: 25,
    name: 'Иван',
    surname: 'Иванов',
    patronymic: 'Петрович',
  })
  return (
    <AppReactContext.Provider value={{ me: me, setMe: setMe }}>{children}</AppReactContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppReactContext)
}

export const useMe = () => {
  const { me } = useAppContext()
  return me
}
