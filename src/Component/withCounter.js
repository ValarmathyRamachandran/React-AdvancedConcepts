import React from 'react'


const UpdatedComponent = OriginalComponent =>{

    function NewComponent() {
        const [count,setCount] = React.useState(0)
    
        const handleCount = () =>{
        setCount(prevCount => prevCount + 1);
}
  
    return (
        <OriginalComponent  count={count} handleCount={handleCount} />)
    }
    return NewComponent

}

export default UpdatedComponent;

