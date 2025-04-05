import { Link, Outlet } from 'react-router'

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
  return (
    <ul className={css.menuList}>
      {links.map((el) => (
        <li key={el.textInLink} className={css.listItem}>
          <Link to={el.to}>{el.textInLink}</Link>
        </li>
      ))}
    </ul>
  )
}
