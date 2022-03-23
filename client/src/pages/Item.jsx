import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div` 
`

const Wrapper = styled.div` 
  padding: 50px;
  display: flex;
`

const ImageContainer = styled.div` 
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit : cover;
`

const InfoContainer = styled.div` 
  flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1` 
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterType = styled.select`
  margin-left: 10px;
  padding: 5px;
  transition: all 0.5s ease;

  &:hover{
      background-color: black;
      color: white;
      border-color: transparent;
    }
`
const FilterOption = styled.option`

`
const QuantityContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;

  &:hover{
      background-color: teal;
      color: white;
    }
`

const Item = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImageContainer>
          <Image src="https://justchicken.com.ng/wp-content/uploads/2020/08/freshly_dressed_broiler_chicken_meat.jpg"/>
        </ImageContainer>
        <InfoContainer>
          <Title>Chicken</Title>
          <Desc>Premiere Meat Company offers free range, hand-cut poultry of the highest quality, all minimally processed.
             Free range chickens grow naturally with plenty of room to roam in a caring “Smart Farm” environment on ranches in California.
             Smart Farmsare places of positive energy, where animals enjoy natural lives with little stress. 
             Our poultry arrives from local farms to be cut by expertly trained artisans and shipped directly to your kitchen, 
             with little to no processing at the peak of freshness.
          </Desc>
          <Price>$ 2.99</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Type</FilterTitle>
              <FilterType>
                <FilterOption>Whole</FilterOption>
                <FilterOption>Pieces</FilterOption>
              </FilterType>
            </Filter>
          </FilterContainer>
          <QuantityContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </QuantityContainer>
        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Item