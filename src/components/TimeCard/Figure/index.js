import styled from 'styled-components'

import { HoursTerm, MinutesTerm, SecondsTerm, TermRoot, EmptyTerm } from './Term'
import { SeparatorRoot } from './Separator'

const FigureRoot = styled.div.attrs(() => {
  return { className: 'flex p-2 justify-center' }
})`
  ${TermRoot}:first-child ${SeparatorRoot} {
    display: none;
  }
`

function Figure ({ hours, minutes, seconds, guide }) {
  return (
    <FigureRoot>
      {hours !== null ? <HoursTerm guide={guide} value={hours} /> : null }
      {minutes !== null ? <MinutesTerm guide={guide} value={minutes} /> : null }
      {seconds !== null ? <SecondsTerm guide={guide} value={seconds} /> : null }
      {hours === null && minutes === null && seconds === null
        ? (
        <EmptyTerm />
          )
        : null}
    </FigureRoot>
  )
}

export default Figure
