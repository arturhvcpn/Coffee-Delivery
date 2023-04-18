import styled from 'styled-components'
import { PhosphorIcons } from '@/libs'

export const LocationContainer = styled.section`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors['purple-50']};
  border-radius: 6px;

  width: 100%;
  max-width: 186px;
  height: 2.375rem;
`

export const LocationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
`

export const LocationIcon = styled(PhosphorIcons.MapPin)`
  font-size: 1.375rem;
  color: ${({ theme }) => theme.colors['purple-200']};
`

export const LocationFromClientText = styled.span`
  line-height: 130%;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors['purple-400']};
`
