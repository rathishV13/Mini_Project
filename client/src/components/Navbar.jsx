import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import axios from 'axios'
import { removeProduct } from '../redux /cartRedux'
import { logout } from '../redux /userRedux'
import { Badge } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

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

const DataResult = styled.ul` 
    list-style: none;
`

const DataContainer = styled.div` 

`

const DataList = styled.li` 
    cursor: pointer;
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

const SearchItem = ({ placeholder }) => {

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

    const itemsName = items.map(item => item.title)

    const [searchItems, setSearchItems] = useState("")
    const [suggestItems, setSuggestItems] = useState([])

    const handleChange = (e) => {
        let searchValue = e.target.value
        let suggestion = []
        if (searchValue.length > 0) {
            suggestion = itemsName.sort().filter((e) => e.toLowerCase().includes(searchValue.toLowerCase()))
        }
        setSuggestItems(suggestion)
        setSearchItems(searchValue)
    }

    const suggestedTexts = (value) => {
        console.log(value);
        setSearchItems(value)
        setSuggestItems([])
    }

    const getSuggestions = () => {
        if (suggestItems.length === 0 && searchItems !== '') {
            return <p>Search Item Not Found</p>
        }
        return (
            <DataResult>
                {
                    suggestItems.map((item, index) => {
                        return (
                            <DataContainer key={index}>
                                <DataList onClick={() => suggestedTexts(item)}>{item}</DataList>
                                {index !== suggestItems.length - 1 && <hr />}
                            </DataContainer>
                        )
                    })
                }
            </DataResult>
        )
    }
    return (
        <SearchContainer>
            <SearchBar>
                <Input placeholder={placeholder} value={searchItems} onChange={handleChange} />
                {getSuggestions()}
                <Search style={{ fill: "#2187c4" }} />
            </SearchBar>
        </SearchContainer>
    )
}

const Navbar = () => {

    const user = useSelector((state) => state.user.currentUser)
    const quantity = useSelector(state => state.cart.quantity)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleLogout = () => {
        dispatch(logout())
        dispatch(removeProduct())
        navigate("/")
    }
    
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchItem placeholder={"Enter Product "} />
                </Left>
                <Center>
                    <Link to={"/"} style={{ textDecoration: 'none' }}>
                        <Logo>Sysco</Logo>
                    </Link>
                </Center>
                <Right>
                    {user ?
                        <Menu onClick={handleLogout}>LOGOUT</Menu> :
                        <Link to={"/register"} style={{ textDecoration: 'none' }}>
                            <Menu>REGISTER</Menu>
                        </Link>                                
                    }
                    
                    {user ? console.log('do nothin')
                        :
                        <Link to={"/login"} style={{ textDecoration: 'none' }}>
                            <Menu>SIGN IN</Menu>
                        </Link>
                    }
                    <Link to={"/cart"}>
                        <Menu>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </Menu>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar