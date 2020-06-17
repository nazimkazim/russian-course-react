import React from 'react'
import Corner from '../../images/MemoryGameAssets/corner.png'
import Star from '../../images/MemoryGameAssets/star.png'

function Card({item, handleClick, id}) {
  return (
    <div className={`memory-game-card ${item.turned ? 'visible': ''}`} onClick={() => handleClick(id)}>
      <div className="memory-game-card-back memory-game-card-face">
        <img className="corner corner-top-left" src={Corner} alt=""/>
        <img className="corner corner-top-right" src={Corner} alt=""/>
        <img className="corner corner-bottom-left" src={Corner} alt=""/>
        <img className="corner corner-bottom-right" src={Corner} alt=""/>
        <img className="star" src={Star} alt=""/>
      </div>
      <div className="memory-game-card-front memory-game-card-face">
        <img className="corner corner-top-left" src={Corner} alt=""/>
        <img className="corner corner-top-right" src={Corner} alt=""/>
        <img className="corner corner-bottom-left" src={Corner} alt=""/>
        <img className="corner corner-bottom-right" src={Corner} alt=""/>
        {item.pic ? <img className="memory-game-card-value" src={item.pic} alt=""/> : item.value}
        
      </div>
    </div>
  )
}

export default Card