import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import axios from 'axios'
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const SearchContainer = styled.div` 

`

const SearchBar = styled.div`
    border: 0.5px solid #2187c4;
    display: flex;
    align-items:center;
    margin-left: 25px;
    padding: 5px;
`

const DataResult = styled.div` 

`

const Input = styled.input`
    border:none;
    outline: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    color: #2187c4;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Menu = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: #2187c4;
`

const SearchItem = ({placeholder}) => {

    const [searchItems, setSearchItems] = useState("")
    const [items, setItems] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products")
                setItems(res.data)
            } catch (error) {
      
            }
          }
    
        getProducts()
    }, [])
    
    console.log(items);

  return (
    <SearchContainer>
        <SearchBar>
            <Input placeholder={placeholder}/>
            <Search style={{fill: "#2187c4"}}/>
        </SearchBar>
    </SearchContainer>
  )
}

const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity)

  return (
    <Container>
        <Wrapper>
           <Left>
               <SearchItem placeholder={"Enter Product "}/>
           </Left>
           <Center>
               <Link to={"/"} style={{ textDecoration: 'none' }}>
                <Logo>Sysco</Logo>
               </Link>
            </Center>
           <Right>
               <Menu>REGISTER</Menu>
               <Menu>SIGN IN</Menu>
               <Link to={"/cart"}>
                <Menu>
                <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </Menu>
               </Link>
           </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar