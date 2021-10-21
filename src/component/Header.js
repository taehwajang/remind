
import {Select ,Menu } from "semantic-ui-react"


const Header = () => {
  const countryOptions = [
    { key: '1', value: '서울시', text: '서울시' },
    { key: '2', value: '경기도', text: '경기도' },
    { key: '3', value: '인천', text: '인천' },
    { key: '4', value: '충청도', text: '충청도' },
    { key: '5', value: '제주도', text: '제주도' },
  ]
  return (
    
    <div>
        <Menu inverted >
        <Menu.Item
          name= "홈"
        />
        <Menu.Item
          name= "코스 추천"
        />
        <Menu.Item
          name='지역 볼거리'           
        />
        <Menu.Item  style={{ marginLeft: '70%' }}>
          <div style={{marginRight: '10px'}}>데이트 장소 :  </div>
          <Select  placeholder='데이트 장소를 선택해주세요.' options = {countryOptions}  />
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Header
