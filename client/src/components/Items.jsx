import styled from 'styled-components'
import {popularItems} from "../data"
import SingleItem from './SingleItem'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Items = () => {
  return (
    <Container>
      {popularItems.map(item =>(
        <SingleItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Items