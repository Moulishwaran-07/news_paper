import { useState } from 'react'
import News from './task/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <News></News>
    </div>

  )
}
 
export default App
