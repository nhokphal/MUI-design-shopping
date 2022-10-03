//import React from 'react'

import styled from "styled-components"
// import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-materials"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { sliderItems } from "../data.js";
import { useState } from "react";



  const Container = styled.div
  `
    width: 100%; 
    height: 100hv;
    display: flex;
    margin-top: 45px;
    overflow: hidden;
    position: relative;
  `;

 const Arrow = styled.div 
 `
    width: 50px;
    height: 50px;
    background-color: Ivory;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: ${props => props.direction === "left" && "10px"} ;
    right: ${props => props.direction === "right" && "10px"};
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
 `;

    const Wrapper = styled.div
    `
    Display: flex;
    transition: all 1.5s ease;
    align-items: center;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    `;

    const Slide = styled.div
    `
    align-items: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #${(props) => props.bg};
    `;

    const ImgContainer = styled.div
    `
    height: 100%;
    object-fit: none;
    flex: 1;
    `;

    const Image = styled.img
    `
     height: 50%;
    `;

    const InfoContainer = styled.div
    `
    padding: 50px;
    flex: 1;
    `;

    const Title = styled.p
    `
    font-size: 60px;
    flex: 1;
    `;

    const Desc = styled.p
    `
    margin: 50px 0px;
    flex: 1;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    `;

    const Button = styled.button 
    `
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    `;

    const Slider = () =>
    {
        const [slideIndex, setSlideIndex] = useState(0);
        
        const handleClick = (direction) =>
        {
            if(direction === "left")
            {
                setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
            }
            else if (direction === "right")
            {
                setSlideIndex(slideIndex < 2 ? + 1 : 0)
            }

        };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>

        <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => 
            <Slide bg={item.bg} key={item.id} >
            <ImgContainer>
                <Image src={item.img}/>
            </ImgContainer> 
            <InfoContainer>
                <Title >
                {item.title}
                </Title>
                <Desc>
                {item.desc}
                <Button>Show me</Button>
                </Desc>
            </InfoContainer>
    </Slide>
        )}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider