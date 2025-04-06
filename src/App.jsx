import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListComponent from './assets/components/ListComponent'
import ListCard from './assets/components/ListCard'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <section>
     <ListComponent/>
   </section>
  )
}

export default App
