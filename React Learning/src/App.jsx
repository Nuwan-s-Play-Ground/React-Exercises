import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <h1>My Education</h1>
        <ol>
          <li>Combined Maths</li>
          <li>Physics</li>
          <li>Chemistry</li>
          <li>Software Engineering</li>
        </ol>
      </nav>
      <main>
        <p>I love to learn Science and Engineering</p>
      </main>
    </>
  )
}

export default App
