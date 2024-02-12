import React, { useState } from 'react'

interface item {
  id: number
  text: string
  completed: boolean
}

export default function TodoItem() {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: 'Learn react Js', completed: false },
    { id: 2, text: 'Learn typeScript', completed: false }
  ])

  const [title, setTitle] = useState<string>("")

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    )
  }

  const clickHandler = () => {
    const newTodo: item = { id: Date.now(), text: title, completed: false }
    setTodos(prevTodos => [...prevTodos, newTodo])
    setTitle("")
  }



  return (
    <div className='bg-gray-400 flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-center text-3xl pb-[40px]'> todo Application for you</h1>
      <div className="">
        <div className='bg-white min-w-[400px] rounded-md'>
          <ul className='text-center mb-10'>
            {
              todos.map((todo) => (
                <li style={{ textDecoration: todo.completed ? 'line-through' : "" }} onClick={() => handleToggle(todo.id)} key={todo.id}>{todo.text}</li>
              ))
            }
          </ul>
          <div className="flex items-center justify-between gap-x-2">
            <input
              type="text"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  clickHandler()
                  e.currentTarget.value = ''
                }
              }}
              onChange={(e) => {
                setTitle(e.currentTarget.value)
              }}
              className='w-full h-full border-[2px] border-gray-600 rounded-md' />
            <button onClick={() => {
              clickHandler()
            }} className='bg-yellow-400  rounded-md text-2xl text-nowrap px-4 cursor-pointer'>Add Todo</button>
          </div>
        </div>
      </div>
    </div>
  )
}
