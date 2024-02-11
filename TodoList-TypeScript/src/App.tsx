import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import TodoItem from './TodoItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-400 flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-center text-3xl pb-[40px]'> todo Application for you</h1>
      <div className="">
        <TodoItem />
      </div>
    </div>
  )
}

export default App
