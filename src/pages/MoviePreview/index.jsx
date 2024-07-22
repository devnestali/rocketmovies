import { Container } from "./styles";
import { Header } from "../../components/Header";
import { FiArrowLeft } from 'react-icons/fi'
import { Rating } from "../../components/Rating";

export function MoviePreview() {
  return (
    <Container>
      <Header />

      <main>
        <a href="/"><FiArrowLeft /> Voltar</a>
        <div>
          <h1>Interstellar</h1>
          <Rating />
        </div>
      </main>

    </Container>
  )
}