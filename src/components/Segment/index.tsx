import css from './index.module.scss'

interface ISegment {
  title: string
  size?: 1 | 2
  children: React.ReactNode
}

export const Segment = ({ title, size = 1, children }: ISegment) => {
  return (
    <div className={css.segment}>
      {title &&
        (size === 1 ? (
          <h1 className={css.header}>{title}</h1>
        ) : (
          <h2 className={css.header}>{title}</h2>
        ))}
      <div className={css.content}>{children}</div>
    </div>
  )
}
