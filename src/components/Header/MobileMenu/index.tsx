/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import HamburgerMenu from '../../../assets/mobile_menu.png'
import MobileLogo from '../../../assets/mobile_logo.png'
import CloseIcon from '../../../assets/close_button.png'
import colors from '../../../utils/colors'

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div css={{ width: '100%' }}>
      <section css={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <button type="button" onClick={() => setMenuOpen(true)}>
          <img src={HamburgerMenu} alt="menu" css={{ height: '55px' }} />
        </button>
      </section>
      {menuOpen && (
        <div
          css={{
            background: colors.mobileBackGround,
            height: '509px',
            left: '0px',
            position: 'absolute',
            top: '0px',
            width: '100%',
          }}
        >
          <section
            css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px' }}
          >
            <img src={MobileLogo} alt="logo" css={{ height: '55px' }} />
            <button type="button" onClick={() => setMenuOpen(false)}>
              <img src={CloseIcon} alt="close menu" css={{ height: '55px' }} />
            </button>
          </section>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
