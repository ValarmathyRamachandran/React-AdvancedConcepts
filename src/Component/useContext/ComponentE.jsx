import React from 'react'
import ComponentF from './ComponentF'
import { useContext} from 'react'
import { UserContext } from '../../App'

function ComponentE() {

    const user = useContext(UserContext) //useContext method
  return (
    <div>
      {user}
    </div>
  )
}

export default ComponentE