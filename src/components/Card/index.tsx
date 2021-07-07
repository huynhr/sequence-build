/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import colors from '../../utils/colors'

interface Props {
  title: string
  description: string
}

const Card = ({ title, description }: Props) => {
  const [isShown, setIsShown] = useState(false)

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)',
  })

  return (
    <button
      type="button"
      css={{
        display: `${isDesktop ? 'flex' : 'inherit'}`,
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
      {!isShown && <h4 css={{ fontSize: `${isDesktop ? '18px' : '16px'}` }}>{title}</h4>}
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
            fontSize: `${isDesktop ? '18px' : '16px'}`,
          }}
        >
          {description}
        </p>
      )}
    </button>
  )
}

export default Card
