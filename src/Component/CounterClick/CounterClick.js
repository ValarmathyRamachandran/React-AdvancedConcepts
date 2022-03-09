import React from 'react'
import withCounter from '../withCounter';



function CounterClick(props) {

// const [count,setCount] = React.useState(0)
    
// const handleCount = () =>{
//         setCount(prevCount => prevCount + 1);
// }
           
  const {count, handleCount } = props

  return (
    <div>
        <button onClick={handleCount}> Counter Clicked by {count} times</button>
    </div>
  )
}



export default withCounter(CounterClick)