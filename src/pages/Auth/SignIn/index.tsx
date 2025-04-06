import { useFormik } from 'formik'
import { withZodSchema } from 'formik-validator-zod'
import { useState } from 'react'
import { Link } from 'react-router'

import { icons } from '../../../assets/icons'
import { Segment } from '../../../components/Segment'
import { useMe } from '../../../lib/ctx'
import { getSignUpRoute } from '../../../lib/routes'

import { zSignInSchema } from './input'

import css from './index.module.scss'

export const SignIn = () => {
  const me = useMe()
  const [type, setType] = useState<'text' | 'password'>('password')
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: withZodSchema(zSignInSchema),
    onSubmit: async (values) => {
      const result = values
      formik.resetForm()
      return result
    },
  })
  if (me) {
    return (
      <Segment color="red" title={'Error'}>
        <p>You are already authorized</p>
      </Segment>
    )
  }

  return (
    <Segment title="Вход">
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <div className={css.inputBox}>
          <label className={css.label} htmlFor="email">
            Почта
          </label>
          <input
            className={css.emailInput}
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="text"
          />
        </div>
        <div className={css.inputBox}>
          <label className={css.label} htmlFor="password">
            Пароль
          </label>
          <div className={css.passwordEye}>
            <input
              className={css.passwordInput}
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type={type}
            />
            <button
              onClick={() => setType((prev) => (prev === 'text' ? 'password' : 'text'))}
              className={css.eye}
            >
              {icons.eye(type === 'text' ? 'opened' : 'striked')}
            </button>
          </div>
        </div>
        <button className={css.button} type="submit">
          Вход
        </button>
        <button className={css.linkButton}>
          <Link className={css.reactLink} to={getSignUpRoute()}>
            Регистрация
          </Link>
        </button>
      </form>
    </Segment>
  )
}
