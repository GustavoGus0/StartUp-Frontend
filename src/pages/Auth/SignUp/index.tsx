import { useFormik } from 'formik'
import { withZodSchema } from 'formik-validator-zod'
import { Link } from 'react-router'
import { z } from 'zod'

import { Input } from '../../../components/Input'
import { Segment } from '../../../components/Segment'
import { useMe } from '../../../lib/ctx'
import { getSignInRoute } from '../../../lib/routes'

import { zSignUpSchema } from './input'

import css from './index.module.scss'

export const SignUp = () => {
  const me = useMe()
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      patronymic: '',
      email: '',
      password: '',
      passwordAgain: '',
    },
    validate: withZodSchema(
      zSignUpSchema.extend({ passwordAgain: z.string().min(4) }).superRefine((val, ctx) => {
        if (val.password !== val.passwordAgain) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Пароли должны совпадать',
            path: ['passwordAgain'],
          })
        }
      })
    ),
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
    <Segment title="Регистрация">
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <div className={css.inputContainer}>
          <div className={css.inputColumn}>
            <Input formik={formik} name="name" labelText="Имя" />
            <Input formik={formik} name="surname" labelText="Фамилия" />
            <Input formik={formik} name="patronymic" labelText="Отчество" />
          </div>
          <div className={css.inputColumn}>
            <Input formik={formik} name="email" labelText="Электронная почта" />
            <Input formik={formik} name="password" labelText="Пароль" needEye={true} />
            <Input formik={formik} name="passwordAgain" labelText="Пароль снова" needEye={true} />
          </div>
        </div>
        <div className={css.buttons}>
          <button className={css.button} type="submit">
            Регистрация
          </button>
          <button className={css.linkButton}>
            <Link className={css.reactLink} to={getSignInRoute()}>
              Войти
            </Link>
          </button>
        </div>
      </form>
    </Segment>
  )
}
