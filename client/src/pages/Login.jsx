import styled from "styled-components"

const Container = styled.div` 
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div` 
    padding: 20px;
    width: 25%;
    background-color: white;
    border-radius: 10px;
`
const Title = styled.h1` 
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex :1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button` 
    width: 40%;
    border: none;
    padding: 15px;
    background-color: #2187c4;
    font-weight: 700;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #56b146;
    }
`

const Link = styled.a` 
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                SIGN IN
            </Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>
                    LOGIN
                </Button>
                <Link>FORGOT PASSWORD?</Link>
                <Link>REGISTER</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login