import React from 'react'
import {Button, Input} from "semantic-ui-react"

const Search = ({onClick, value, setSearch}) => {
  
  return (
    <div style={{height:"60px", width:"70%", display:"flex", justifyContent: "center"}}>
      <Input value={value} onChange={(e) => setSearch(e.target.value)} type="text" id ="searchBox" placeholder= "데이트 장소를 검색해주세요." style={{width:"30%"}}></Input>
      <Button onClick={onClick} color='violet' style={{marginLeft:"10px", width:"70px", height:"60px"}}>검색</Button>
    </div>
  )
}

export default Search
