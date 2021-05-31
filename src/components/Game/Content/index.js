import TimeCalculation from './TimeCalculation'

function Content ({ type = 'time-calculation' }) {
  switch (type) {
    case 'time-calculation':
      return <TimeCalculation />
    default:
      throw Error()
  }
}

export default Content
