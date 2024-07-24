'use client'

import { useState } from 'react'
import Parse from '../../lib/parseClient'
import { useRouter } from 'next/navigation'

export default function CreateObject() {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const MyObject = Parse.Object.extend('MyObject')
    const myObject = new MyObject()
    myObject.set('name', name)

    try {
      await myObject.save()
      router.push('/')
    } catch (error) {
      console.error('Error creating object:', error)
    }
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Object</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter object name"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create
        </button>
      </form>
    </main>
  )
}
