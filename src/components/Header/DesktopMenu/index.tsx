/** @jsxImportSource @emotion/react */

import Button from '../../Button'
import Logo from '../../Logo'
import Menu, { MenuItem } from '../../Menu/index'

const DesktopMenu = () => (
  <div css={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
    <Logo />
    <Menu flexDirection="row">
      <MenuItem disabled link="#">
        Docs
      </MenuItem>
      <MenuItem link="#">Github</MenuItem>
      <MenuItem link="#">Discord</MenuItem>
      <MenuItem link="#">Contact</MenuItem>
      <a href="https://sequence.app/auth" target="_blank" rel="noreferrer">
        <Button btnType="primary" type="button" text="Launch Wallet" />
      </a>
    </Menu>
  </div>
)

export default DesktopMenu
