import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Items from "../components/Items"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const Container = styled.div` 
 
`

const Title = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center; 
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

  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value

    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{cat}</Title>
        <FilterBar>
          <Filter>
            <TextFilter>Filter Products:</TextFilter>
            <Selection name="foodType" onChange={handleFilters}>
              <Option selected disabled>FOOD TYPE</Option>  
              <Option>Dry</Option>
              <Option>Processed</Option>
              <Option>Raw</Option>
              <Option>Vegan</Option>
            </Selection>    
          </Filter>
          <Filter><TextFilter>Sort Products:</TextFilter>
          <Selection onChange={e=>setSort(e.target.value)}>
              <Option value="newest">Newest</Option>  
              <Option value="desc">Price (Highest)</Option>
              <Option value="asc">Price (Lowest)</Option>
            </Selection>  
          </Filter>
        </FilterBar>
        <Items cat={cat} filters={filters} sort={sort}/>
        <Footer/>
    </Container>
  )
}

export default ListProducts