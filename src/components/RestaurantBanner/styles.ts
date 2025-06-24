import styled from 'styled-components'

type BackgroundProps = {
    image: string
}

export const Background = styled.div<BackgroundProps>`
    width: 100%;
    height: 280px;
    background: linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
        ),
        url(${props => props.image}) center/cover no-repeat;
    position: relative;
`

export const Cuisine = styled.span`
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0;
    position: absolute;
    text-align: left;
    padding-left: 32px;
    top: 30px; 
    left: 166px;
    padding: 0;
    width: 101px;
    height: 33.25px;
    text-shadow: 1px 1px 4px #000;
    z-index: 2;
`

export const Title = styled.h2`
    color: #fff;
    text-align: left;
    padding-left: 32px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0;
    position: absolute;
    padding: 0 0 0 140px;
    top: 210px;
    left: 31px;
    margin: 0;
    text-shadow: 1px 1px 4px #000;
    z-index: 2;
`
