/** @jsxImportSource @emotion/react */

import { FC, InputHTMLAttributes } from 'react'
import colors from '../../utils/colors'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: FC<InputProps> = ({ label, name, ...rest }: InputProps) => (
  <div css={{ display: 'flex', flexDirection: 'column', marginBottom: '32px' }}>
    <label htmlFor={name} css={{ 'marginBottom': '10px', 'color': colors.disabled, 'font-weight': '500' }}>
      {label}
    </label>
    <input
      css={{
        border: '2px solid #2a2a2a',
        backgroundColor: 'transparent',
        borderRadius: '15px',
        minHeight: '60px',
        outline: 'none',
        padding: '0 20px',
        fontSize: '20px',
        color: '#fff',
      }}
      name={name}
      {...rest}
    />
  </div>
)

export default Input
