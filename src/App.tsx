/** @jsxImportSource @emotion/react */
import { Header } from './components'

function App() {
  return (
    <div css={{ background: 'black', height: '100vh' }}>
      <Header />
      <button onClick={() => console.log('hello world')} type="button">
        Click Me!
      </button>
    </div>
  )
}

export default App
