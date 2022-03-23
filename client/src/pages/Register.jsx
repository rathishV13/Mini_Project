import styled from "styled-components"

const Container = styled.div` 
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/7706567/pexels-photo-7706567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div` 
    padding: 20px;
    width: 40%;
    background-color: white;
    border-radius: 10px;
`
const Title = styled.h1` 
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex :1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.div` 
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button` 
    width: 40%;
    border: none;
    padding: 15px;
    background-color: #2187c4;
    font-weight: 700;
    color: white;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        background-color: #56b146;
    }
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                CREATE AN ACCOUNT
            </Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By signing up, you agree to our Terms , Data Policy and Cookies Policy. <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>
                    CREATE
                </Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register