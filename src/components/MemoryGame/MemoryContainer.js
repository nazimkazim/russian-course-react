import React, {useEffect, useState} from 'react'
import Card from './Card'

function Index({data}) {

  const [dataInternal, setData] = useState([])
  const [clickedCardId, setClickedCard] = useState(null)

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

  function handleClick(id) {
    setClickedCard(id)
    console.log(id)
    dataInternal && dataInternal.forEach((item, index) => {
      if (clickedCardId === index) {
        console.log(item.value)
        const newArray = [...dataInternal]
        newArray[id].turned = true
        setData(newArray)
        
      } else {
        return true
      }
    })
  }
  
  return (
    <div className="memory-game-container">
      {dataInternal && dataInternal.map((item, index) => (
        <Card key={index} item={item} handleClick={handleClick} id={index}/>
      ))}
    </div>
  )
}

export default Index
