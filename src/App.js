import React, { useState } from 'react';
import styled from 'styled-components';
import LeftArrow from './assets/arrow-left.svg';
import RightArrow from './assets/arrow-right.svg';
import Testimonial from './Testimonial';
import { motion, AnimatePresence } from 'framer-motion';

const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] };
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
  width: 75vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex: 1;
  align-self: stretch;

  &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 80, 0.05);
  }
`;
const Img = styled.img`
  height: 12px;
  width: 20px;
  flex: 1;
`;

const TestimonialWrapper = styled(motion.div)`
  flex: 4;
`;

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? -70 : 70,
      scale: 1.1,
      opacity: 0
    }
  },
  animate: () => {
    return {
      x: 0,
      scale: 1,
      opacity: 1
    }
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? -70 : 70,
      scale: 1.1,
      opacity: 0
    }
  }
}

function App() {
  const [[page, direction], setPage] = useState([0, 0]);
  const goBack = () => {
    if (page > 0) {
      setPage([page - 1, -1]);
    } else {
      setPage([testimonials.length - 1, -1])
    }
  }
  const goForward = () => {
    if (page < (testimonials.length - 1)) {
      setPage([page + 1, 1]);
    } else {
      setPage([0, 1]);
    }
  }

  return (
    <Container>
      <TestimonialContainer>
        <ArrowContainer onClick={goBack}>
          <Img src={LeftArrow} alt="left arrow" />
        </ArrowContainer>
        <AnimatePresence custom={direction} exitBeforeEnter>
          {
            testimonials.map((item, index) => {
              if (index === page) {
                return <TestimonialWrapper
                  key={item.name}
                  variants={variants}
                  custom={direction}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                >
                  <Testimonial testimonial={item} />
                </TestimonialWrapper>
              }
              return null;
            })
          }
        </AnimatePresence>
        <ArrowContainer onClick={goForward}>
          <Img src={RightArrow} alt="right arrow" />
        </ArrowContainer>
      </TestimonialContainer>
    </Container >

  );
}

export default App;
