import Glass from '../../src/images/MemoryGameAssets/glass.png'
import Cloud from '../../src/images/MemoryGameAssets/cloud.png'
import Plane from '../../src/images/MemoryGameAssets/plane.png'
import Sun from '../../src/images/MemoryGameAssets/sun.png'

const _ = require('lodash')

export const MGdata1 = _.shuffle([
  {
    value:"glass",
    pic:Glass
  },
  {
    value:"glass",
    pic:''
  },
  {
    value:"cloud",
    pic:Cloud
  },
  {
    value:"cloud",
    pic:''
  },
  {
    value:"plane",
    pic:Plane
  },
  {
    value:"plane",
    pic:''
  },
  {
    value:"sun",
    pic:Sun
  },
  {
    value:"sun",
    pic:''
  }
])