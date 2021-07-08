/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'
import colors from '../../utils/colors'

interface MenuItemProps {
  children: ReactNode
  link: string
  disabled?: Boolean
}

const menuItemDefaultProps = {
  disabled: false,
}

export const MenuItem = ({ children, link, disabled }: MenuItemProps) => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)',
  })

  return (
    <a
      href={link}
      css={{
        'pointerEvents': disabled ? 'none' : 'visible',
        'padding': `${isDesktop ? 0 : '5px'} 16px`,
        'fontSize': isDesktop ? '16px' : '21px',
        'font-weight': '600',
        'display': 'flex',
        'alignItems': 'center',
      }}
    >
      <span
        css={{ 'color': disabled ? colors.disabled : colors.white, '&:hover': { color: colors.disabled } }}
      >
        {children}
      </span>
    </a>
  )
}

MenuItem.defaultProps = menuItemDefaultProps

interface MenuProps {
  children: ReactNode | [ReactNode]
  flexDirection: 'column' | 'row'
}

const Menu = ({ children, flexDirection }: MenuProps) => (
  <div css={{ display: 'flex', justifyContent: 'space-between', flexDirection }}>{children}</div>
)

export default Menu
