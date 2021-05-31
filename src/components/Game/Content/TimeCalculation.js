import TimeCard, { } from '../../TimeCard'

function TimeCalculation () {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="mx-2">
        <TimeCard seconds={10} />
      </div>
      <div className="mx-2">
        <div className="text-4xl font-bold">+</div>
      </div>
      <div className="mx-2">
        <TimeCard seconds={10} />
      </div>
      <div className="mx-2">
        <div className="text-4xl font-bold">=</div>
      </div>
      <div className="mx-2">
        <TimeCard />
      </div>
    </div>
  )
}

export default TimeCalculation
