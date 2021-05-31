import styled from 'styled-components'

import Pie from './Pie'
import Separator from './Separator'

export const TermRoot = styled.div.attrs(() => {
  return ({ className: 'flex items-center' })
})``

function Term ({ value, size, color, needleColor, needleLength, needleWidth, frameColor, backgroundColor, guide, guideUnits }) {
  return (
    <TermRoot>
      <Separator />
      <Pie {...{
        guide,
        value,
        size,
        color,
        needleColor,
        needleLength,
        needleWidth,
        frameColor,
        backgroundColor,
        guideUnits
      }} />
    </TermRoot>
  )
}

export function EmptyTerm (props) {
  return <Term
    needLength={0}
    needleColor="transparent"
    needleWidth={0}
    size={0}
    value={0}
    frameColor="#CCCCCC"
    backgroundColor="#EEEEEE"
    guide={false}
    {...props}
  />
}

const secondsGuideUnits = [30, 20, 15, 10, 5]
export function SecondsTerm (props) {
  return <Term
    color="#FFF9C4"
    needleLength="1"
    needleColor="#F57F17"
    needleWidth="2"
    guideUnits={secondsGuideUnits}
    size="60" {...props} />
}

const minutesGuideUnits = [30, 20, 15, 10, 5]
export function MinutesTerm (props) {
  return <Term
    color="#B3E5FC"
    needleLength="1"
    needleColor="#01579B"
    needleWidth="3"
    guideUnits={minutesGuideUnits}
    size="60" {...props} />
}

const hoursGuideUnits = [6, 4, 3, 2]
export function HoursTerm (props) {
  return <Term
    color="#B2DFDB"
    needleLength="0.5"
    needleColor="#004D40"
    needleWidth="3"
    guideUnits={hoursGuideUnits}
    size="12" {...props} />
}

export default Term
