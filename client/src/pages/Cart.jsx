import { Add, Remove } from "@material-ui/icons"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div` 
`

const Wrapper = styled.div` 
    padding: 20px;
`

const Title = styled.h1` 
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopBtn = styled.button` 
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div` 
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div` 
    display: flex;
    justify-content: space-between;
`

const Information = styled.div` 
    flex: 3;
`
const Product = styled.div` 
    display: flex;
    justify-content: space-between;
`

const ProductInfo = styled.div` 
    flex: 2;
    display: flex;
`

const Image = styled.img` 
    width: 200px;
`

const ItemInfo = styled.div` 
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ItemName = styled.span` 
    margin-bottom: 10px;
`

const ItemId = styled.span` 
    
`

const PriceInfo = styled.div` 
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ItemQuantityContainer = styled.div` 
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ItemAmount = styled.div` 
    font-size: 25px;
    margin: 5px;
`

const ItemPrice = styled.div` 
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div` 
    flex: 1;
    border: 0.5px solid teal;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1` 
    font-weight: 200;
`

const SummaryItem = styled.div` 
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span` 

`

const SummaryItemPrice = styled.span` 

`

const Button = styled.button` 
    border: none;
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    transition: all 0.5s ease;
    &:hover {
        background-color: #56b146;
    }
`

const Cart = () => {
    const cart = useSelector(state=>state.cart)
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
                <TopBtn>CONTINUE SHOPPING</TopBtn>
                <TopTexts>
                    <TopText>Shopping Cart (2)</TopText>
                    <TopText>Wishlist (2)</TopText>
                </TopTexts>
                <TopBtn type="filled">CHECKOUT NOW</TopBtn>
            </Top>
            <Bottom>
                <Information>
                    { cart.products.map(product=>(
                        <Product>
                            <ProductInfo>
                                <Image src={product.img}/>
                                <ItemInfo>
                                    <ItemName><b>Product: </b>{product.title}</ItemName>
                                    <ItemId><b>ID: </b>{product._id}</ItemId>
                                </ItemInfo>
                            </ProductInfo>
                            <PriceInfo>
                                <ItemQuantityContainer>
                                    <Add/>
                                    <ItemAmount>{product.quantity}</ItemAmount>
                                    <Remove/>
                                </ItemQuantityContainer>
                                <ItemPrice>$ {product.price * product.quantity}</ItemPrice>
                            </PriceInfo>
                        </Product>
                        
                        ))
                    }
                    <Hr/>
                </Information>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shippingl</SummaryItemText>
                        <SummaryItemPrice>$ 0.99</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -0.99</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
                    </SummaryItem>
                    <Button>
                        CHECKOUT NOW
                    </Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart