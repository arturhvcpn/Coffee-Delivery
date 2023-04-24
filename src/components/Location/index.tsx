import {
  LocationContainer,
  LocationContent,
  LocationFromClientText,
  LocationIcon,
} from './styles'

function Location() {
  return (
    <LocationContainer>
      <LocationContent>
        <LocationIcon />
        <LocationFromClientText>Porto Alegre, RS</LocationFromClientText>
      </LocationContent>
    </LocationContainer>
  )
}

export { Location }
