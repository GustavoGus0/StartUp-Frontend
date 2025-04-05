import { Link } from 'react-router'

import { icons } from '../../assets/icons'
import { getResourcesPageRoute } from '../../lib/routes'

import css from './index.module.scss'

interface ISegment {
  title: string
  returnToResources?: boolean
  size?: 1 | 2
  children: React.ReactNode
}

export const Segment = ({ title, returnToResources, size = 1, children }: ISegment) => {
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
            <h1 className={css.header}>{title}</h1>
          ) : (
            <h2 className={css.smallerHeader}>{title}</h2>
          ))}
      </div>
      <div className={css.content}>{children}</div>
    </div>
  )
}
