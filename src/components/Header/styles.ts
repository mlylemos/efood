import styled from 'styled-components'
import bannerImage from '../../assets/banner.jpg'

export const HeaderBar = styled.header`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  height: 162px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`

export const Logo = styled.img`
  width: 125px;
  margin: 0 236px 0 327px;
`

export const Nav = styled.div`
  color: #e66767;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-left: 0;
`

export const Cart = styled.div`
  color: #e66767;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-left: 10px;
  margin-right: 100px;
  white-space: nowrap;
`