function Term ({ value = 0, unit }) {
  return (
    <div className="flex items-end mx-2">
      <div className="text-2xl mr-1 font-bold">{value}</div>
      {unit && <div className="text-base">{unit}</div>}
    </div>
  )
}

export function EmptyTerm (props) {
  return <Term unit={null} value="?" {...props} />
}

export function SecondsTerm (props) {
  return <Term unit="秒" {...props} />
}

export function MinutesTerm (props) {
  return <Term unit="分" {...props} />
}

export function HoursTerm (props) {
  return <Term unit="時間" {...props} />
}

export default Term
