/** @jsxImportSource @emotion/react */
import { Header } from './components'

function App() {
  return (
    <div>
      <div
        css={{
          'background': 'black',
          'height': '100vh',
          'width': '100vw',
          'position': 'absolute',
          'z-index': '-1',
        }}
      />
      <Header />
    </div>
  )
}

export default App
