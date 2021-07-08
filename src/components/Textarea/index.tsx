/** @jsxImportSource @emotion/react */

import { FC, TextareaHTMLAttributes } from 'react'
import colors from '../../utils/colors'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}

const Textarea: FC<TextareaProps> = ({ label, name, ...rest }: TextareaProps) => (
  <div css={{ display: 'flex', flexDirection: 'column', minHeight: '200px', marginBottom: '32px' }}>
    <label htmlFor={name} css={{ 'marginBottom': '10px', 'color': colors.disabled, 'font-weight': '500' }}>
      {label}
    </label>
    <textarea
      css={{
        border: '2px solid #2a2a2a',
        backgroundColor: 'transparent',
        borderRadius: '15px',
        minHeight: '200px',
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

export default Textarea
