import React, {useEffect, useState} from 'react'
import Card from './Card'

function Index({data}) {

  const [dataInternal, setData] = useState(null)

  useEffect(() => {
    const arr = []
    data.map((item) =>{
      return arr.push(
        {
          value:item.value,
          pic:item.pic,
          turned:false
        }
      )
    })
    setData(arr)
    
  }, [data])
  console.log(dataInternal)
  return (
    <div className="memory-game-container">
      {dataInternal && dataInternal.map((item) => (
        <Card item={item}/>
      ))}
    </div>
  )
}

export default Index
