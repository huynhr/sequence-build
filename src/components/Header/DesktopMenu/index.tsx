/** @jsxImportSource @emotion/react */

import Logo from '../../Logo'
import Menu, { MenuItem } from '../../Menu/index'

const DesktopMenu = () => {
  console.log('something')
  return (
    <div css={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <Logo />

      <Menu flexDirection="row">
        <MenuItem disabled link="#">
          Docs
        </MenuItem>
        <MenuItem link="#">Github</MenuItem>
        <MenuItem link="#">Discord</MenuItem>
        <MenuItem link="#">Contact</MenuItem>
        <button type="button">Launch Wallet</button>
      </Menu>
    </div>
  )
}

export default DesktopMenu
