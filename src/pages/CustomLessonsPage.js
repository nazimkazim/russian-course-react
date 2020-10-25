import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'



function CustomLessonsPage() {
  return (
    <div className="container is-fluid">
      <div className="columns">
        <div className="column"><Link to="/individual-lessons/jon-custom-lesson1">Lesson1</Link></div>
        <div className="column">Lesson1</div>
        <div className="column">Lesson1</div>
        <div className="column">Lesson1</div>
      </div>
    </div>
  )
}

export default CustomLessonsPage
