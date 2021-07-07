/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import colors from '../../utils/colors'

interface Props {
  title: string
  description: string
}

const Card = ({ title, description }: Props) => {
  const [isShown, setIsShown] = useState(false)
  return (
    <button
      type="button"
      css={{
        background: isShown ? colors.cardHover : '',
        backgroundColor: isShown ? colors.cardHover : colors.cardBackground,
        borderRadius: '20px',
        cursor: 'pointer',
        height: '100%',
        width: '100%',
        overflow: 'auto',
        padding: '24px',
      }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {!isShown && <h4>{title}</h4>}
      {isShown && (
        <p
          css={{
            background: 'transparent',
            backgroundClip: 'border-box',
            left: 0,
            top: 0,
            overflow: 'auto',
            maxWidth: '100%',
            textAlign: 'start',
          }}
        >
          {description}
        </p>
      )}
    </button>
  )
}

export default Card
