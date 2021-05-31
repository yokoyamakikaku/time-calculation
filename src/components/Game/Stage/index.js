import Inputter from '../Inputter'
import Content from '../Content'

function Stage () {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-24 text-center text-2xl font-bold flex items-center justify-center p-4">
        <div>? に当てはまるのはどれ？</div>
      </div>
      <div className="flex-grow">
        <Content />
      </div>
      <div className="h-64">
        <Inputter />
      </div>
    </div>
  )
}

export default Stage
