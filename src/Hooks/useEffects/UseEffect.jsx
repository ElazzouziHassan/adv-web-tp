import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [state, setState] = useState(1)
  useEffect(() => {
    console.log('rendered!')
    return () => console.log('destroy');
  })

  return (
    <div className="use-effect-hook">
      <h2>{state}</h2>
      <button onClick={() => setState() }>Increment</button>
      <button onClick={() => setState() }>Decrement</button>
    </div>
  )
}

export default UseEffect