'use client'

import { useState, useEffect } from 'react'
import Parse from '../lib/parseClient'

interface MyObject {
  id: string;
  get: (key: string) => string | undefined;
}

export default function Home() {
  const [objects, setObjects] = useState<MyObject[]>([])

  useEffect(() => {
    async function fetchObjects() {
      const query = new Parse.Query('MyObject')
      try {
        const results = await query.find()
        setObjects(results as MyObject[])
      } catch (error) {
        console.error('Error fetching objects:', error)
      }
    }
    fetchObjects()
  }, [])

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Objects</h1>
      <ul>
        {objects.map(object => (
          <li key={object.id}>{object.get('name')}</li>
        ))}
      </ul>
    </main>
  )
}
