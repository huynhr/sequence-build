/** @jsxImportSource @emotion/react */
import { Header } from './components'
import colors from './utils/colors'
import cardGridData from './utils/cardGridData.json'
import CardGrid from './components/CardGrid/index'

function App() {
  return (
    <div>
      <div
        css={{
          'background': colors.black,
          'height': '100vh',
          'max-height': '100%',
          'width': '100vw',
          'position': 'absolute',
          'z-index': '-1',
        }}
      />
      <Header />
      <CardGrid data={cardGridData} />
    </div>
  )
}

export default App
