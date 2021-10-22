import React,{ useState } from 'react'
import Foot from "./Foot"

const Top = () => {
  const [search , setSearch] =useState('');
  const [searchArr , setSearchArr] = useState([]);


  const add = ()=>{
    let newArr = [...searchArr];
    newArr.push(search) ;
    setSearchArr(newArr);
    setSearch('');
    console.log(searchArr);
  }
  return (
    <div>
      <Foot onClick={add} value={search} setSearch={setSearch}/>
      <div>{
        searchArr.map((ee)=>(<p>{ee}</p>))
      }</div>
    </div>
  )
}

export default Top
