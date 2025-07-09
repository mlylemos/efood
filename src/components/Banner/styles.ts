import styled from 'styled-components'
import bannerImage from '../../assets/banner.jpg'

export const Background = styled.div`
  width: 100%;
  height: 360px;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 97px;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  color: #e66767;
  text-align: center;
  line-height: 42px;
  margin-top: 24px;
  max-width: 540px;
`

export const Logo = styled.img`
  margin-bottom: 16px;
`