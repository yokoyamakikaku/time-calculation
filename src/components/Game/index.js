import { RefreshCw } from 'react-feather'

import Stage from './Stage'

function Game () {
  const level = 99

  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="flex-shrink-0 h-16 flex flex-row">
        <button className="w-16 h-16 flex justify-center items-center flex-shrink-0">
          <RefreshCw />
        </button>
        <div className="mx-4 h-full flex-grow flex flex-row items-center">
          <div className="h-8 w-full bg-gray-100 rounded-lg flex justify-start overflow-hidden">
            <div className="w-1/4 bg-blue-500 rounded-lg"></div>
          </div>
        </div>
        <div className="w-20 h-16 p-2 flex-shrink-0">
          <div className="bg-gray-100 w-full h-full rounded-lg flex justify-center items-center">
            <div className="flex items-end">
              <div className="text-xs mr-1 leading-none">Lv.</div>
              <div className="text-lg font-bold leading-none w-6">{level}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow relative">
        <Stage />
      </div>
      <div></div>
    </div>
  )
}

export default Game
