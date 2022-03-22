import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #56b146;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Great Deals Available ! For Wholesales & Retail Purchasing Above $1000
    </Container>
  )
}

export default Announcement