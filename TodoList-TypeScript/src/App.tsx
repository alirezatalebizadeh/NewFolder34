import { useState } from 'react'
import './styles.css'
// import TodoItem from './TodoItem'
import StopWatch from './StopWatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StopWatch />
    </>
  )
}

export default App
