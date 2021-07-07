/** @jsxImportSource @emotion/react */

import colors from '../../utils/colors'

interface ButtonProps {
  type?: 'primary' | 'secondary'
  text: string
  onClick?: () => void
}

const defaultProps = {
  type: 'primary',
  onClick: () => {},
}

const Button = ({ type, text, onClick }: ButtonProps) => (
  <>
    {type === 'primary' && (
      <button
        type="button"
        css={{
          border: `2px solid ${colors.white}`,
          backgroundSize: '200%',
          borderRadius: '20px',
          backgroundPositionS: '0',
          display: 'inline-block',
          transition: 'background-position-x .5s',
          padding: '10px',
        }}
        onClick={onClick}
      >
        {text}
      </button>
    )}
    {type === 'secondary' && (
      <button
        type="button"
        css={{
          backgroundImage: colors.buttonBackground,
          backgroundSize: '200%',
          borderRadius: '30px',
          backgroundPositionS: '0',
          display: 'inline-block',
          transition: 'background-position-x .5s',
          padding: '10px 40px',
        }}
        onClick={onClick}
      >
        {text}
      </button>
    )}
  </>
)

Button.defaultProps = defaultProps

export default Button
