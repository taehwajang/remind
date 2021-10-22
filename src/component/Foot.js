import React from 'react'
import { Input, Button } from 'semantic-ui-react'

const Foot = ({onClick , value , setSearch}) => {
  return (
    <div>
      <Input value={value} onChange={(e)=>(setSearch(e.target.value))}/> 
      <Button onClick={onClick}>검색</Button>
    </div>
  )
}

export default Foot
