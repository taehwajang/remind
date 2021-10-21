import React ,{ useEffect } from 'react'




const Map = () => {
  useEffect(()=>{
    mapScript()
  },[])

  const mapScript= ()=>{
    var container = document.getElementById('map'),
    options = { 
      center: new window.kakao.maps.LatLng(37.45841087591169, 126.69791462693608), 
      level: 3 
    };
    const map = new window.kakao.maps.Map(container, options); 

    displayLevel();
 
    // 지도 레벨은 지도의 확대 수준을 의미합니다
    // 지도 레벨은 1부터 14레벨이 있으며 숫자가 작을수록 지도 확대 수준이 높습니다
    function zoomIn() {        
        // 현재 지도의 레벨을 얻어옵니다
        var level = map.getLevel();
        
        // 지도를 1레벨 내립니다 (지도가 확대됩니다)
        map.setLevel(level - 1);
        
        // 지도 레벨을 표시합니다
        displayLevel();
    }    
    
    function zoomOut() {    
        // 현재 지도의 레벨을 얻어옵니다
        var level = map.getLevel(); 
        
        // 지도를 1레벨 올립니다 (지도가 축소됩니다)
        map.setLevel(level + 1);
        
        // 지도 레벨을 표시합니다
        displayLevel(); 
    }    
     
    function displayLevel(){
        var levelEl = document.getElementById('maplevel');
        levelEl = '현재 지도 레벨은 ' + map.getLevel() + ' 레벨 입니다.';
    }


    
  }
  
  return (
    
        <div id="map" style={{width:"50%", height:"500px" }}></div>
  )
}

export default Map
