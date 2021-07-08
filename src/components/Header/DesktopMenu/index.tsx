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
      <Button type="button" btnType="primary" text="Launch Wallet" />
    </Menu>
  </div>
)

export default DesktopMenu
