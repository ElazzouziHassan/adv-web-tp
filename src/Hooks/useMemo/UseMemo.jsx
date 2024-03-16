import React, { useMemo, useState } from 'react'

function UseMemo() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const expensiveCalc = () => {
    console.log('calcul');
    return a+b;
  }

  const computedValue = useMemo( () => {
    return expensiveCalc(a,b);
  },[a,b])

  return (
    <div className="use-memo">
      <h2>{computedValue}</h2>
      <button onCanPlay={ () => setA(a+1)}>inc</button>
    </div>
  )
}

export default UseMemo