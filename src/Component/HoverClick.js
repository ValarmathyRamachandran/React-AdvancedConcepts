import React from 'react'
import UpdatedComponent from './withCounter';


function HoverClick(props) {

const [count,setCount] = React.useState(0)

const handleCount = () =>{
    setCount(prevCount => prevCount + 1);
};

  return (
    <div onMouseOver={handleCount}>{props.name} HoverClick {count} times</div>
  )
}

export default UpdatedComponent(HoverClick)