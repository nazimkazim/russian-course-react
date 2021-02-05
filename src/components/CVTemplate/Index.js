import React from 'react'
import {generateCV} from './data'

function Index() {
  React.useEffect(() => {
    generateCV()
  }, [])
  return (
    <div>
      CV template
    </div>
  )
}

export default Index
