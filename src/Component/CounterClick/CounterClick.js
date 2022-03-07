import React from 'react'
import UpdatedComponent from '../withCounter';


function CounterClick(props) {

const [count,setCount] = React.useState(0)
    
const handleCount = () =>{
        setCount(prevCount => prevCount + 1);
}
           
    console.log(count+"Hii" +props.name)

  return (
    <div>
        <button onClick={handleCount}>{props.name} Counter Clicked by {count} times</button>
    </div>
  )
}



export default UpdatedComponent(CounterClick)