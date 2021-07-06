/** @jsxImportSource @emotion/react */
import { useMediaQuery } from 'react-responsive'
import Logo from '../Logo'

const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({
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
        'marginRight': 'auto',
        'marginLeft': 'auto',
        '@media(min-width: 640px)': {
          paddingTop: '48px',
        },
      }}
    >
      {isDesktopOrLaptop && <Logo />}
    </div>
  )
}

export default Header
