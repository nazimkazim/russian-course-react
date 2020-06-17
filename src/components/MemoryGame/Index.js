import React, {useEffect, useState} from 'react'
import Card from './Card'

function Index({data}) {

  const [dataInternal, setData] = useState(null)
  const [clickedCard, setClickedCard] = useState(null)

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
  //console.log(dataInternal)
  console.log(clickedCard)
  

  return (
    <div className="memory-game-container">
      {dataInternal && dataInternal.map((item, index) => (
        <Card key={index} item={item} setClickedCard={setClickedCard} id={index}/>
      ))}
    </div>
  )
}

export default Index
