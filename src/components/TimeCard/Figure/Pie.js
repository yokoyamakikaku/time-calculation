import { useMemo } from 'react'

const { PI, cos, sin, floor } = Math
const TWO_PI = PI * 2

const WIDTH = 116
const HEIGHT = 116
const VIEW_BOX = `${-WIDTH / 2} ${-HEIGHT / 2} ${WIDTH} ${HEIGHT}`
const RADIUS = 50
const NEEDLE_LENGTH = RADIUS - 8

function Guide ({ value = 0, size = 60, units }) {
  const unit = useMemo(() => {
    return units.find(unit => {
      return value % unit === 0
    })
  }, [value, units])

  const lines = useMemo(() => {
    if (!unit) return []

    const length = size / unit
    return Array.from({ length }).fill(null).map((_, i) => {
      const radian = TWO_PI * i / length
      return {
        x1: 0,
        y1: 0,
        x2: cos(radian) * RADIUS,
        y2: sin(radian) * RADIUS
      }
    })
  }, [unit, size])

  return (
    <>
    {lines.map(({ x1, y1, x2, y2 }, index) =>
      <line key={index} {...{ x1, y1, x2, y2 }} stroke="orange" strokeWidth={1} strokeDasharray="4 4" />
    )}
    </>
  )
}

function Needle ({ rotate = 0, length = 1, color = 'black', width = 1 }) {
  const transform = useMemo(() => `rotate(${rotate})`, [rotate])
  const y2 = useMemo(() => -1 * NEEDLE_LENGTH * length, [length])
  return (
    <g transform={transform} transform-origin="0 0">
      <line
        x1="0" y1="-2" x2="0" y2={y2}
        stroke={color} strokeWidth={width}
        strokeLinecap="round" />
      <circle cx="0" cy="0" r={3} fill={color} />
    </g>
  )
}

function Pie ({
  value = 0, size = 60,
  color = 'gray',
  needleColor = 'black',
  needleLength = 1,
  needleWidth = 1,
  frameColor = 'black',
  backgroundColor = 'white',
  guide = false, guideUnits = []
}) {
  const areaPath = useMemo(() => {
    if (!(value > 0)) return ''

    const path = [
      'M 0 0',
      `L ${RADIUS} 0`
    ]
    const radian = (TWO_PI * value / size)

    if (radian > PI) {
      path.push(`A ${RADIUS} ${RADIUS} 0 0 1 ${
        floor(cos(PI) * RADIUS)
      } ${
        floor(sin(PI) * RADIUS)
      }`)
    }

    const x = floor(cos(radian) * RADIUS)
    const y = floor(sin(radian) * RADIUS)
    path.push(`A ${RADIUS} ${RADIUS} 0 0 1 ${x} ${y}`)

    path.push('Z')
    return path.join(' ')
  }, [size, value])

  const rotate = useMemo(() => {
    if (!(value > 0)) return 0

    return Math.floor(360 * value / size) % 360
  }, [value, size])

  return (
    <svg width={WIDTH} height={HEIGHT} viewBox={VIEW_BOX}>
      <circle cx="0" cy="0" r={RADIUS} fill={backgroundColor} />
      <g transform="rotate(-90)">
      {guide && <Guide value={value} size={size} units={guideUnits} />}
        <path d={areaPath} stroke="none" fill={color} fillOpacity={0.8} />
      </g>
      <Needle
        rotate={rotate}
        length={needleLength}
        color={needleColor}
        width={needleWidth} />
      <circle cx="0" cy="0" r={RADIUS} fill="none" stroke={frameColor} strokeWidth="2" />
    </svg>
  )
}

export default Pie
