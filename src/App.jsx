import { useState } from 'react'
import Search from '/src/components/Search';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search/>
    </>
  )
}

export default App