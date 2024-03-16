import React from 'react'

function UseState() {
  const list = [
    {id:1, name:"test 1"},
    {id:2, name:"test 2"},
    {id:3, name:"test 3"},
    {id:4, name:"test 4"},
    {id:5, name:"test 5"},
  ];
  return (
    <div className='list-items'>
      <ul>
          {
            list.map( l => <li>{l.name}</li>)
          }
        </ul>
        <button>Remove element</button>
    </div>
  )
}

export default UseState