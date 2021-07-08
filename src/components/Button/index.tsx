/** @jsxImportSource @emotion/react */

import { FC, ButtonHTMLAttributes } from 'react'
import colors from '../../utils/colors'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: 'primary' | 'secondary'
  text: string
}

const Button: FC<ButtonProps> = ({ btnType, text, ...rest }: ButtonProps) => (
  <>
    {btnType === 'primary' && (
      // eslint-disable-next-line react/button-has-type
      <button
        css={{
          border: `2px solid ${colors.white}`,
          backgroundSize: '200%',
          borderRadius: '20px',
          backgroundPositionS: '0',
          display: 'inline-block',
          transition: 'background-position-x .5s',
          padding: '10px',
        }}
        {...rest}
      >
        {text}
      </button>
    )}
    {btnType === 'secondary' && (
      // eslint-disable-next-line react/button-has-type
      <button
        css={{
          backgroundImage: colors.buttonBackground,
          backgroundSize: '200%',
          borderRadius: '30px',
          backgroundPositionS: '0',
          display: 'inline-block',
          transition: 'background-position-x .5s',
          padding: '10px 40px',
        }}
        {...rest}
      >
        {text}
      </button>
    )}
  </>
)

export default Button
