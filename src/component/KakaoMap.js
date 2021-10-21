import React from 'react'
import Map from "./Map"
import  Search  from './Search'


const KakaoMap = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", marginTop:"20px", justifyContent:"space-around" }}>
      <Map />
      <Search />
    </div>
  )
}

export default KakaoMap
