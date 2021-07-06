import logo from './assets/sequence_logo.png'
import { Header } from './components'

function App() {
  return (
    <div style={{ background: 'white', height: '100vh' }}>
      <Header />
      <button onClick={() => console.log('hello world')} type="button">
        Click Me!
      </button>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default App
