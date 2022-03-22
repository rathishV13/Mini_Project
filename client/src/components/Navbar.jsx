import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import img from '../Logo.png'
import { Badge } from '@material-ui/core';

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

const SearchBar = styled.div`
    border: 0.5px solid #2187c4;
    display: flex;
    align-items:center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border:none;
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

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
           <Left>
               <SearchBar>
                    <Input/>
                    <Search style={{fill: "#2187c4"}}/>
               </SearchBar>
           </Left>
           <Center><Logo>Sysco</Logo></Center>
           <Right>
               <Menu>REGISTER</Menu>
               <Menu>SIGN IN</Menu>
               <Menu>
               <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
               </Menu>
           </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar