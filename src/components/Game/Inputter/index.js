import TimeCards from './TimeCards'
import TimeLabels from './TimeLabels'

function Inputter ({ type = 'time-cards' }) {
  switch (type) {
    case 'time-cards':
      return <TimeCards />
    case 'time-labels':
      return <TimeLabels />
    default:
      throw Error()
  }
}

export default Inputter
