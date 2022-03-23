import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Items from "../components/Items"
import Footer from "../components/Footer"

const Container = styled.div` 
 
`

const Title = styled.h1` 
  margin: 20px;
`

const FilterBar = styled.div` 
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div` 
  margin: 20px;
`

const TextFilter = styled.span` 
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;  
`

const Selection = styled.select`
  font-size: 12px;
  font-weight: 700;
  padding: 10px;
  margin-right: 20px;
  transition: all 0.5s ease;
  
  &:hover{
      background-color: black;
      color: white;
      border-color: transparent;
    }
`

const Option = styled.option` 

`

const ListProducts = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>ALL PRODUCTS</Title>
        <FilterBar>
          <Filter>
            <TextFilter>Filter Products:</TextFilter>
            <Selection>
              <Option disabled selected>CATEGORY</Option>  
              <Option>Grocery</Option>
              <Option>Meat</Option>
              <Option>Dairy</Option>
              <Option>Seafood</Option>
            </Selection>
            <Selection>
              <Option disabled selected>FOOD TYPE</Option>  
              <Option>Dry</Option>
              <Option>Processed</Option>
              <Option>Raw</Option>
            </Selection>    
          </Filter>
          <Filter><TextFilter>Sort Products:</TextFilter>
          <Selection>
              <Option selected>Newest</Option>  
              <Option>Price (Highest)</Option>
              <Option>Price (Lowest)</Option>
            </Selection>  
          </Filter>
        </FilterBar>
        <Items/>
        <Footer/>
    </Container>
  )
}

export default ListProducts