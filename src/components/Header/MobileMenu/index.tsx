/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import HamburgerMenu from '../../../assets/mobile_menu.png'
import MobileLogo from '../../../assets/mobile_logo.png'
import CloseIcon from '../../../assets/close_button.png'
import colors from '../../../utils/colors'
import Menu, { MenuItem } from '../../Menu'
import Button from '../../Button'

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
          <section
            css={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <Menu flexDirection="column">
              <MenuItem disabled link="#">
                Docs
              </MenuItem>
              <MenuItem link="#">Github</MenuItem>
              <MenuItem link="#">Discord</MenuItem>
              <MenuItem link="#">Contact</MenuItem>
            </Menu>
          </section>
          <section css={{ padding: '24px' }}>
            <Button btnType="secondary" type="button" text="Launch Wallet" />
          </section>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
