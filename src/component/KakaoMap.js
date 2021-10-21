import React, {useState} from 'react'
import Map from "./Map"
import  Search  from './Search'


const KakaoMap = () => {
  const [search, setSearch] = useState('');
  const [searchArr, setArrSearch] = useState([]); 
  const addSearch = () =>{
    let newArr = [...searchArr];
    newArr.push(search);
    setArrSearch(newArr);
    setSearch('');
    console.log(searchArr);
  }
  return (
    <div style={{display: "flex", flexDirection: "row", marginTop:"20px", justifyContent:"space-around" }}>
      <Map />
      <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
        <Search onClick={addSearch} value={search} setSearch={setSearch} />
        <div>
        {searchArr.map((sec) => (
          <p>{sec}</p>
        ))} 
        </div>
      </div>
    </div>
  )
}

export default KakaoMap
