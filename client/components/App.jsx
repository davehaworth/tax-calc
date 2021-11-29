import React from 'react'

import Calculator from './Calculator'

function App () {
  return (
    <>
      <Calculator />
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
      </div>
    </>
  )
}

export default App
