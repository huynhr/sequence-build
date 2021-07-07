/** @jsxImportSource @emotion/react */
import { Header } from './components'
import Card from './components/Card'
import colors from './utils/colors'

function App() {
  return (
    <div>
      <div
        css={{
          'background': colors.black,
          'height': '100vh',
          'width': '100vw',
          'position': 'absolute',
          'z-index': '-1',
        }}
      />
      <Header />
      <div css={{ maxWidth: '500px', height: '300px' }}>
        <Card />
      </div>
    </div>
  )
}

export default App
