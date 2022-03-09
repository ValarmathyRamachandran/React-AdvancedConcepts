import React from 'react'
import withCounter from './withCounter';


function HoverClick(props) {

const {count, handleCount } = props
  return (
    <div onMouseOver={handleCount}>HoverClick {count} times</div>
  )
}

export default withCounter(HoverClick)