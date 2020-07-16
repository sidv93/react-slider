import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Container = styled(motion.div)`
    flex: 7;
    padding: 20px 30px;
    display: flex;
`;
const ImageContainer = styled(motion.div)`
    flex: 2;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        width: 200px;
        height: 200px;
        background: #3f56da;
        left: -100px;
        top: -70px;
        border-radius: 100%;
        z-index: -9;
    }
`;
const Image = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
const ContentContainer = styled(motion.div)`
    flex: 3;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Quote = styled.h3`
    color: #2e293c;
    letter-spacing: 1px;
    line-height: 30px;
`;
const Name = styled.h5`
    color: #a09da6;
    margin: 15px 0;
`;
const Title = styled.h6`
    color: #a09da6;
    margin: 5px 0;
`;

const Testimonial = ({ testimonial }) => {
    return (
        <AnimatePresence>
            <Container>
                <ImageContainer initial={false}>
                    <span style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                        <AnimatePresence>
                            <Image
                                key={testimonial.image}
                                initial={{
                                    x: 100,
                                    scale: 1.1,
                                    opacity: 0,
                                    transition: {delay:0.4, ...transition}
                                }}
                                animate={{
                                    x: 0,
                                    scale: 1,
                                    opacity: 1,
                                    transition: {delay: 0.4, ...transition}
                                }}
                                exit={{
                                    x: -100,
                                    opacity: 0,
                                    transition:{...transition}
                                }}
                                
                                src={testimonial.image} alt="image of person" />
                        </AnimatePresence>
                    </span>
                </ImageContainer>
                <AnimatePresence>
                <ContentContainer
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    transition={transition}
                >
                    <Quote>{testimonial.quote}</Quote>
                    <Name>{testimonial.name}</Name>
                    <Title>{testimonial.title}</Title>
                </ContentContainer>
                </AnimatePresence>
            </Container>
        </AnimatePresence>
    );
};

export default Testimonial;