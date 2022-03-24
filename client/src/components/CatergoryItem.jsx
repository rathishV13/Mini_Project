import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div` 
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img` 
    width: 100%; 
    height: 100%;
    object-fit: cover;
`

const Information = styled.div` 
    position:absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1` 
    color: white;
    margin-bottom: 20px;
`

const Button = styled.button` 
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color: white;
    color:gray;
`


const CatergoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
            <Image src={item.img}/>
            <Information>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Information>
        </Link>
    </Container>
  )
}

export default CatergoryItem