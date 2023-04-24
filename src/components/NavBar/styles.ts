import styled from 'styled-components'
import { NextImage } from '@/ui'

export const NavBarContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6.625rem;
  background: ${({ theme }) => theme.colors['white-50']};

  padding: 2rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }
`

export const LogoImage = styled(NextImage).attrs({
  width: 85,
  height: 40,
})``

export const NavBarContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
`
