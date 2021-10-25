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
  const deleteBtn =(id)=>{
    
    
    
  }
  const reset =()=>{
    setSearchArr([]);
  }
 
  return (
    <div style={{display: "flex", flexDirection: "row", marginTop:"20px", justifyContent:"space-around" }}>
      <Map />
      <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
        <Search onClick={addSearch} onClick2={reset} value={search} setSearch={setSearch} />
        
        <div style={{border:"1px solid black" , display:"flex", justifyContent:"center" ,flexDirection:"column", marginTop:"20px", width:"60%", marginLeft:"100px",height:"100%" , borderRadius:"25px"}}>
          {searchArr.map((value,index) => (
            <p  id ={index} style={{marginTop:"5px",marginBottom:"5px", marginLeft: "15px"}} >{value}<Button onClick={deleteBtn(index)}>삭제</Button></p>
        ))}
        </div>
    
        
      </div>
    </div>
  )
}

export default KakaoMap
