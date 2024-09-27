import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ECMAScript24 from './components/ECMAScript24/ECMAScript24'
import AtomicDesign from './components/AtomicDesign/AtomicDesign'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ECMAScript24 />
      <AtomicDesign />
    </>
  )
}

export default App
