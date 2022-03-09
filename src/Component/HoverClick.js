import React from 'react'
import UpdatedComponent from './withCounter';


function HoverClick(props) {

// const [count,setCount] = React.useState(0)

// const handleCount = () =>{
//     setCount(prevCount => prevCount + 1);
// };

const {count, handleCount } = props
  return (
    <div onMouseOver={handleCount}>HoverClick {count} times</div>
  )
}

export default UpdatedComponent(HoverClick)