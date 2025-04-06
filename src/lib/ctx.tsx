import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

import { IStartuper } from '../types'

export type AppContext = {
  me?: IStartuper
  setMe?: Dispatch<SetStateAction<IStartuper | undefined>>
}

const AppReactContext = createContext<AppContext>({})

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [me, setMe] = useState<IStartuper | undefined>({
    id: 25,
    email: 'placeholder@mail.ru',
    role: 'startuper',
    name: 'Иван',
    surname: 'Иванов',
    patronymic: 'Петрович',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.',
    projects: null,
    lastMessage: undefined,
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
