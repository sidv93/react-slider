import React, { useState } from 'react';
import styled from 'styled-components';
import LeftArrow from './assets/arrow-left.svg';
import RightArrow from './assets/arrow-right.svg';
import Testimonial from './Testimonial';

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("./assets/image3.jpg")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("./assets/image1.jpg")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment."
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("./assets/image2.jpg")}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
  }
];

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 700px;
    height: 420px;
    background: #f2f2f6;
    right: 0;
    bottom: 0;
    opacity: 0.8;
    z-index: -10;
  }
`;
const TestimonialContainer = styled.div`
  height: 50vh;
  width: 60vw;
  display: flex;
`;
const ArrowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 80, 0.05);
  }
`;
const Img = styled.img`
  height: 12px;
  width: 20px;
  flex: 1;
`;

function App() {
  const [active, setActive] = useState(testimonials[0]);
  const [current, setCurrent] = useState(0);
  setTimeout(() => {
    if(current < 2) {
      setCurrent(current+1);
      setActive(testimonials[current+1]);
    } else {
      setCurrent(0);
      setActive(testimonials[0]);
    }
  }, 4000)
  return (
    <Container>
      <TestimonialContainer>
        <ArrowContainer>
          <Img src={LeftArrow} alt="left arrow" />
        </ArrowContainer>
        <Testimonial testimonial={active} />
        <ArrowContainer>
          <Img src={RightArrow} alt="right arrow" />
        </ArrowContainer>
      </TestimonialContainer>
    </Container>
  );
}

export default App;
