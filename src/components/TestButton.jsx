import React from 'react'

const TestButton = () => {
    
  return (
    <div>
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='back-btn'
    >
     <i className="fa-solid fa-arrow-turn-up"></i>
    </button>
  </div>
  )
}

export default TestButton