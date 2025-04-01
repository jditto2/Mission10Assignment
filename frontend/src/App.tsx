import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BowlersList from './BowlersList'
import Heading from './Heading'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading />
      <BowlersList />
    </>
  )
}

export default App
