import React from 'react'
import Card from './Card'

function Index({data}) {
  console.log(data)
  return (
    <div className="memory-game-container">
      {data.map((item) => (
        <Card item={item}/>
      ))}
    </div>
  )
}

export default Index
