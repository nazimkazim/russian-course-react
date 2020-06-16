import React from 'react'
import Corner from '../../images/MemoryGameAssets/corner.png'
import Star from '../../images/MemoryGameAssets/star.png'
import Glass from '../../images/MemoryGameAssets/glass.png'

function Card() {
  return (
    <div className="memory-game-card visible">
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
        <img className="memory-game-card-value" src={Glass} alt=""/>
      </div>
    </div>
  )
}

export default Card