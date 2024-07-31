/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Text({ title_1, title_2 }) {
  return (
    <Container>
      <p>{title_1}</p>
      <p>{title_2}</p>
    </Container>
  )
}