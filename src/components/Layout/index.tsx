import { Outlet } from 'react-router'

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
      <li className={css.listItem}>List Item 1</li>
      <li className={css.listItem}>List Item 2</li>
      <li className={css.listItem}>List Item 3</li>
      <li className={css.listItem}>List Item 4</li>
    </ul>
  )
}
