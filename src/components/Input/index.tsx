import { FormikProps } from 'formik'
import { useState } from 'react'

import { icons } from '../../assets/icons'

import css from './index.module.scss'

interface IInput {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: FormikProps<any>
  name: string
  labelText: string
  needEye?: boolean
  errorMessage?: string
}

export const Input = ({ formik, name, labelText, needEye = false, errorMessage }: IInput) => {
  const [type, setType] = useState<'text' | 'password'>(needEye ? 'password' : 'text')
  const value = formik.values[name]
  const error = errorMessage || (formik.errors[name] as string | undefined)
  const invalid = !!error && value !== ''

  return (
    <div className={css.inputBox}>
      <label className={css.label} htmlFor={name}>
        {labelText}
      </label>
      <div className={css.inputWithEye}>
        <input
          style={invalid ? { border: '2px solid red' } : {}}
          className={css.input}
          id={name}
          onChange={(e) => {
            void formik.setFieldValue(name, e.target.value)
          }}
          value={formik.values[name]}
          type={type}
        />
        {needEye && (
          <button
            onClick={() => setType((prev) => (prev === 'text' ? 'password' : 'text'))}
            className={css.eye}
          >
            {icons.eye(type === 'text' ? 'opened' : 'striked')}
          </button>
        )}
      </div>
    </div>
  )
}
