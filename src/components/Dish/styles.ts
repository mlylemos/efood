import styled from 'styled-components'

export const Card = styled.div`
    background-color: #e66767;
    padding: 8px;
    color: #ffebd9;
    width: 320px;
    height: 338px;
`
export const DishButton = styled.button`
    margin-top: 5px;
    background-color: #ffebd9;
    color: #e66767;
    font-weight: 700;
    width: 304px;
    height: 24px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: white;
    }
`

export const Image = styled.img`
    width: 304px;
    height: 167px;
    object-fit: cover;
`

export const Info = styled.div`
    margin-top: 8px;
`

export const Title = styled.h3`
    font-size: 16px;
    height: 19px;
    font-weight: 900;
    margin: 8px 0;
    line-height: 100%;
`

export const Description = styled.p`
    font-size: 14px;
    height: 88px;
    line-height: 22px;
    font-weight: 400;
`
