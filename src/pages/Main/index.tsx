import React from 'react'

import { icons } from '../../assets/icons'
import { Segment } from '../../components/Segment'
import { useMe } from '../../lib/ctx'
import { defineCyrRole } from '../../utils/defineCyrRole'

import css from './index.module.scss'

export const Profile = () => {
  const me = useMe()
  if (!me) {
    return (
      <Segment color="red" title="Unauthorized">
        <p>You have no access to this page</p>
      </Segment>
    )
  }

  return (
    <Segment title="Профиль">
      <Preview
        role={defineCyrRole(me.role, {})}
        description={me.description}
        title={`${me.surname} ${me.name} ${me.patronymic}`}
      />
    </Segment>
  )
}

const Preview = ({
  photo,
  role,
  title,
  description,
  children,
}: {
  photo?: React.JSX.Element | string
  role: string
  title: string
  description: string
  children?: React.ReactNode
}) => {
  return (
    <div className={css.preview}>
      <div className={css.photo}>{photo || icons.profilePlaceholder()}</div>
      <div className={css.textContent}>
        <h3 className={css.header}>{title}</h3>
        <h4 className={css.role}>{role}</h4>
        <p className={css.description}>{description}</p>
      </div>
      {children}
    </div>
  )
}
