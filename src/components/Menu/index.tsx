/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react'
import colors from '../../utils/colors'

interface MenuItemProps {
  children: ReactNode
  link: string
  disabled?: Boolean
}

const menuItemDefaultProps = {
  disabled: false,
}

export const MenuItem = ({ children, link, disabled }: MenuItemProps) => (
  <a
    href={link}
    css={{
      'pointerEvents': disabled ? 'none' : 'visible',
      'padding': '0 16px',
      'color': disabled ? colors.disabled : colors.white,
      'fontSize': '16px',
      '&:hover': { color: colors.disabled },
    }}
  >
    {children}
  </a>
)

MenuItem.defaultProps = menuItemDefaultProps

interface MenuProps {
  children: ReactNode | [ReactNode]
  flexDirection: 'column' | 'row'
}

const Menu = ({ children, flexDirection }: MenuProps) => (
  <div css={{ display: 'flex', justifyContent: 'space-between', flexDirection }}>{children}</div>
)

export default Menu
