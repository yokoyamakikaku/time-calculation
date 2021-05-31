import {
  HoursTerm,
  MinutesTerm,
  SecondsTerm,
  EmptyTerm
} from './Term'

function Label ({ hours, minutes, seconds }) {
  return (
    <div className="flex justify-center items-end bg-gray-100 py-2 h-12">
      {hours !== null ? <HoursTerm value={hours} /> : null }
      {minutes !== null ? <MinutesTerm value={minutes} /> : null }
      {seconds !== null ? <SecondsTerm value={seconds} /> : null }
      {hours === null && minutes === null && seconds === null
        ? (
        <EmptyTerm />
          )
        : null}
    </div>
  )
}

export default Label
