"use client"

import { useState } from "react"

export default function Home(){
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState("")

  function addTodo(){
    if(input.trim() == "") return 
    setTodos([...todos,input.trim()])
    setInput("")
  }

  return (
    <main className="max-w-xl mx-auto mt-20 ps-4">
      <h1 className="text-3xl font-bold mb-6">My Todo App</h1>
      <div className="flex gap-2 mb-6">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your task"
          className="flex-1 border border-gray-300 rounded px-3 py-2"
        />
        <button onClick={addTodo} className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
      </div>
    </main>
  )
}

