import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px 30px;
    display: flex;
    align-item: center;
    justify-content: center;
`;
const ImageContainer = styled.div`
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
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
const ContentContainer = styled.div`
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
        <Container>
            <ImageContainer initial={false}>
                <span style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                    <Image
                        key={testimonial.image}
                        src={testimonial.image} alt="image of person"
                    />
                </span>
            </ImageContainer>
            <ContentContainer>
                <Quote>{testimonial.quote}</Quote>
                <Name>{testimonial.name}</Name>
                <Title>{testimonial.title}</Title>
            </ContentContainer>
        </Container>
    );
};

export default Testimonial;