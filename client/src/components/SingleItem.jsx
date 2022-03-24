import styled from "styled-components"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom"

const Information = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    position: relative;

    &:hover ${Information}{
        opacity: 1;
    }
`

const Image = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
`

const Icon = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
      background-color: #e9f5f5;
      transform: scale(1.1);

    }
`

const SingleItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Information>
          <Icon>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}>
            <SearchOutlined/>
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined/>
          </Icon>
      </Information>
    </Container>
  )
}

export default SingleItem