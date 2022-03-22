import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f0f0f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    top: 0;
    bottom:0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin:auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 3;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 2s ease;
    transform : translateX(${props=>props.slideIndex * -100}vw);
`

const SliderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=> props.bg};
`

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

`

const Btn = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: #F4DFBA;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        background-color: white;
    }
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3)
        } else if(direction === "right"){
            setSlideIndex(slideIndex < 3 ? slideIndex +1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction='left' onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <SliderContainer bg={item.bg} key={item.id}>
                    <ImageContainer>
                        <Image src={item.img}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Btn>SHOP NOW</Btn>
                    </InfoContainer>
                </SliderContainer>
            ))}
        </Wrapper>
        <Arrow direction='right' onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider