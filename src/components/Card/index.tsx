/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import colors from '../../utils/colors'

const Card = () => {
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
      {!isShown && <h4>Title Goes here</h4>}
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      )}
    </button>
  )
}

export default Card
