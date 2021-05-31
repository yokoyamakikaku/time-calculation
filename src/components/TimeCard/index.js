import { useMemo } from 'react'

import Figure from './Figure'
import Label from './Label'

function TimeCard ({ hours = null, minutes = null, seconds = null, guide = true, onClick, clickable = false }) {
  const rootClassName = useMemo(() => {
    let className = 'border-2 rounded-lg overflow-hidden'

    if (!!clickable || !!onClick) {
      className += ' shadow-lg'
    }

    return className
  }, [onClick, clickable])
  return (
    <button className={rootClassName}>
      <div className="flex flex-col items-streach">
        <Figure {...{ hours, minutes, seconds, guide }} />
        <Label {...{ hours, minutes, seconds }} />
      </div>
    </button>
  )
}

export default TimeCard
