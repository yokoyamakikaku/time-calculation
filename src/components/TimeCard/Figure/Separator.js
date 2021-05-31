import styled from 'styled-components'

export const SeparatorRoot = styled.div.attrs(() => {
  return {
    className: 'w-2'
  }
})``

function Separator ({ charactor = ':' }) {
  return (
    <SeparatorRoot>
      <div className="flex justify-center items-cetner w-full h-full">
        <div>{charactor}</div>
      </div>
    </SeparatorRoot>
  )
}

export default Separator
