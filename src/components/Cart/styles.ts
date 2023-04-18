import styled from 'styled-components'
import { PhosphorIcons } from '@/libs'

export const CartContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  background: ${({ theme }) => theme.colors['yellow-50']};
  border-radius: 6px;
  width: 2.375rem;
  height: 2.375rem;
`

export const CartIcon = styled(PhosphorIcons.ShoppingCart)`
  font-size: 1.375rem;
  color: ${({ theme }) => theme.colors['yellow-600']};
`
