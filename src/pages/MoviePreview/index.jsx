import { Container } from "./styles";
import { Button } from "../../components/Button";

export function MoviePreview() {
  return (
    <Container>
      <h1>Hello World</h1>  
      <span>Victor Nestali</span>
      <Button title="Entrar" loading />
      <Button title="Sair"/>
    </Container>
  )
}