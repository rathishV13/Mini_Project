import styled from "styled-components"
import {Facebook, Instagram, Phone, Room, Twitter, YouTube} from "@material-ui/icons"

const Container = styled.div`
    display: flex;
    background-color: #B5FE83;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    font-weight: bold;
    color: #2187c4;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Social = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3` 
    margin-bottom: 30px;
    color: #2187c4;
`

const List = styled.ul` 
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div` 
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                Sysco
            </Logo>
            <Desc>
                The Online Food Ordering System is a fully-fledged E-Commerce site, 
                that allows the users to purchase food items and search for food items that they desire. 
                It allows the user to select & purchase food items by its category. 
                The application will allow its users to manage their carts and update it in real-time.
                All these functionalities allows the applications user to purchase products at ease.
            </Desc>
            <Social>
                <SocialIcon color="1f68e6">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="92399b">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="ca0901">
                    <YouTube/>
                </SocialIcon>
                <SocialIcon color="16a0e9">
                    <Twitter/>
                </SocialIcon>
            </Social>
        </Left>
        <Center>
            <Title>LINKS</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Grocery</ListItem>
                <ListItem>Meat</ListItem>
                <ListItem>Dairy</ListItem>
                <ListItem>Seafood</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>CONTACT INFORMATION</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>1390 Enclave Parkway Houston, TX 77077-2099 US</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>(281) 584-1390</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer