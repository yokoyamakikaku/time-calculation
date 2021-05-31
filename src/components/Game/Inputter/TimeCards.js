import TimeCard from '../../TimeCard'

function TimeCards () {
  return (
    <div className="w-full h-full flex p-4 items-center justify-center">
      <div className="mx-2">
        <TimeCard guide={true} clickable={true} seconds={10} />
      </div>
      <div className="mx-2">
        <TimeCard guide={true} clickable={true} seconds={20} />
      </div>
      <div className="mx-2">
        <TimeCard guide={true} clickable={true} minutes={3} seconds={10} />
      </div>
    </div>
  )
}

export default TimeCards
