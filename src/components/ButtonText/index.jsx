import { Container } from './styles';
export function ButtonText({ icon: Icon, title, ...rest}) {
  return (
    <Container {...resizeTo}>
      {Icon && <Icon />}
      {title}
    </Container>
  )
}