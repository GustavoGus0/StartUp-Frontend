import cn from 'classnames'
import { Link, Outlet, useLocation } from 'react-router'

import { links } from '../../lib/links'

import css from './index.module.scss'

export const Layout = () => {
  return (
    <div className={css.mainContainer}>
      <header className={css.header}>
        <h1 className={css.headerText}>TestName</h1>
        <nav className={css.navbar}>
          <Menu />
        </nav>
      </header>
      <main className={css.main}>
        <div className={css.content}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

const Menu = () => {
  const location = useLocation()

  return (
    <ul className={css.menuList}>
      {links.map((el) => (
        <li key={el.textInLink} className={css.listItem}>
          <Link
            className={cn({ [css.link]: true, [css.active]: location.pathname === el.to })}
            to={el.to}
          >
            {el.textInLink}
          </Link>
        </li>
      ))}
    </ul>
  )
}
