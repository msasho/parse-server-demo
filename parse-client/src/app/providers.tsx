'use client'

import { useEffect } from 'react'
import Parse from 'parse'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Parse.initialize("YOUR_APP_ID");
    Parse.serverURL = 'http://localhost:1337/parse'
  }, [])

  return <>{children}</>

}
