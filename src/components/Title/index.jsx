/* eslint-disable react/prop-types */
import { Rating } from "../Rating";
import { Container } from "./styles";

export function Title ({ title, ratingIcon = false }) {
  return (
    <Container>
      <h1>{title}</h1>
      {ratingIcon && <Rating />}
    </Container>
  )
}