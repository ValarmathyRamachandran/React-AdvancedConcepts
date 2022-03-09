import React from 'react'


const withCounter = WrappedComponent =>{

    function WithCounter() {
        const [count,setCount] = React.useState(0)
    
        const handleCount = () =>{
        setCount(prevCount => prevCount + 1);
}
  
    return (
        <WrappedComponent  count={count} handleCount={handleCount} />)
    }
    return WithCounter

}

export default withCounter;

