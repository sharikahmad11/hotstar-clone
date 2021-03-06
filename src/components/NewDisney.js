import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NewDisney = (props) => {
    return (
        <Container>
            <h4>New to Disney+</h4>
            <Content>
              <Wrap>
                <Link to='/'>
                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/HELLBOUND_KDRAMA_1200x768.jpeg?Vy9X9eUsFD0B6DuKAP50iGLV4hOzXSa6&size=770:433" alt="" />
                </Link> 
              </Wrap>
              <Wrap>
                <Link to='/'>
                    <img src="https://wallpaperaccess.com/full/2703652.png" alt="" />
                </Link> 
              </Wrap>
              <Wrap>
                <Link to='/'>
                    <img src="https://www.india.com/wp-content/uploads/2020/10/mirzapur-2-twitter-review.jpg" alt="" />
                </Link> 
              </Wrap>
              <Wrap>
                <Link to='/'>
                    <img src="https://cdn.europosters.eu/image/1300/posters/avengers-endgame-line-up-i76977.jpg" alt="" />
                </Link> 
              </Wrap>
            </Content>
        </Container> 
    )
}


const Container = styled.div`
    padding: 0 0 26px;

`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden; 
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    
    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`;

export default NewDisney;
