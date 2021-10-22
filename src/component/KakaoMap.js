import React, {useState} from 'react'
import Map from "./Map"
import  Search  from './Search'
import {Button} from 'semantic-ui-react'

const KakaoMap = () => {
  
  const [search, setSearch] = useState('');
  const [searchArr, setSearchArr] = useState([]); 

  const addSearch = () =>{
    let newArr = [...searchArr];
    newArr.push(search);
    setSearchArr(newArr);
    setSearch('');
  }
  const deleteBtn =(index)=>{
    let deleteTarget = index ;
    // searchArr.(deleteTarget);
    console.log(deleteTarget);
    
  }
  const reset =()=>{
    setSearchArr([]);
  }
 
  return (
    <div style={{display: "flex", flexDirection: "row", marginTop:"20px", justifyContent:"space-around" }}>
      <Map />
      <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
        <Search onClick={addSearch} onClick2={reset} value={search} setSearch={setSearch} />
        <div style={{border:"1px solid black" , display:"flex", justifyContent:"center" ,flexDirection:"column", marginTop:"20px", width:"60%", marginLeft:"100px",}}>
        {searchArr.map((sec) => (
          <p id={searchArr.length -1 }>{sec}<Button onClick={deleteBtn(searchArr.length -1)}>삭제</Button></p>
          
        ))} 
          
        </div>
      </div>
    </div>
  )
}

export default KakaoMap
