/** @jsxImportSource @emotion/react */
import { useMediaQuery } from 'react-responsive'
import Logo from '../Logo'
import MobileMenu from './MobileMenu'

const Header = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)',
  })

  return (
    <div
      css={{
        'background': 'transparent',
        'display': 'flex',
        'justifyContent': 'space-between',
        'maxWidth': '72rem',
        'paddingTop': '24px',
        'paddingLeft': '24px',
        'paddingRight': '24px',
        'position': 'relative',
        'marginRight': 'auto',
        'marginLeft': 'auto',
        '@media(min-width: 640px)': {
          paddingTop: '48px',
        },
      }}
    >
      {isDesktop && <Logo />}
      {!isDesktop && <MobileMenu />}
    </div>
  )
}

export default Header
