import { Container }  from './styles';

// eslint-disable-next-line react/prop-types
export function Button ({ icon: Icon, title, disabled = false, highlight = true, onClick }) {
  return (
    <Container
      type='button'
      disabled={disabled}
      onClick={onClick}
      highlight={highlight}
    >
      {Icon && <Icon />}
      {title}
    </Container>
  )
}
