import cn from 'classnames'
import { Link } from 'react-router'

import { icons } from '../../assets/icons'
import { getResourcesPageRoute } from '../../lib/routes'

import css from './index.module.scss'

interface ISegment {
  title: string
  returnToResources?: boolean
  size?: 1 | 2
  color?: 'default' | 'red'
  children: React.ReactNode
}

export const Segment = ({
  title,
  returnToResources,
  size = 1,
  color = 'default',
  children,
}: ISegment) => {
  return (
    <div className={css.segment}>
      <div className={css.segmentHeader}>
        {returnToResources && (
          <Link to={getResourcesPageRoute()} className={css.backButton}>
            <div>{icons.arrowBack()}</div>
          </Link>
        )}
        {title &&
          (size === 1 ? (
            <h1 className={cn({ [css.header]: true, [css.red]: color === 'red' })}>{title}</h1>
          ) : (
            <h2 className={cn({ [css.smallerHeader]: true, [css.red]: color === 'red' })}>
              {title}
            </h2>
          ))}
      </div>
      <div className={cn({ [css.content]: true, [css.redContent]: color === 'red' })}>
        {children}
      </div>
    </div>
  )
}
