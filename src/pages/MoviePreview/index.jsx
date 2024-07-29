import { Container } from "./styles";
import { Header } from "../../components/Header";
import { FiArrowLeft } from 'react-icons/fi'
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { AboutWriter } from "../../components/AboutWriter";

export function MoviePreview() {
  return (
    <Container>
      <Header />

      <main>
        <a href="/"><FiArrowLeft /> Voltar</a>
        
        <div className="title">
          <h1>Interstellar</h1>
          <Rating />
        </div>

        <AboutWriter src="https://github.com/devnestali.png" title="Victor Nestali"/> 
       
        <Tag title="Ficção Científica" />
        <Tag title="Drama" />
        <Tag title="Família" />
        
      </main>

    </Container>
  )
}