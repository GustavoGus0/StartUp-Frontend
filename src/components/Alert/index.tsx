import cn from 'classnames'

import css from './index.module.scss'

interface IAlert {
  title?: string
  message?: string
  color?: 'red' | 'green'
  children?: React.ReactNode
}

export const Alert = ({ title, message, children, color }: IAlert) => {
  return (
    <div className={css.alert}>
      {title && <h3 className={cn({ [css.header]: true })}>{title}</h3>}
      {message && (
        <p className={cn({ [css.message]: true, [`.color-${color}`]: true })}>{message}</p>
      )}
      {children && <div className={cn({ [css.content]: true })}>{children && children}</div>}
    </div>
  )
}
