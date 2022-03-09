import React from 'react'
import withCounter from '../withCounter';



function CounterClick(props) {
           
  const {count, handleCount } = props

  return (
    <div>
        <button onClick={handleCount}> Counter Clicked by {count} times</button>
    </div>
  )
}



export default withCounter(CounterClick)