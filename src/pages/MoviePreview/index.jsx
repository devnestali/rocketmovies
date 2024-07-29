import { Container } from "./styles";
import { Header } from "../../components/Header";
import { FiArrowLeft } from 'react-icons/fi'
import { Tag } from "../../components/Tag";
import { AboutWriter } from "../../components/AboutWriter";
import { Title } from "../../components/Title";

export function MoviePreview() {
  return (
    <Container>
      <Header />

      <main>
        <a href="/"><FiArrowLeft /> Voltar</a>
        
        <Title title="Interstellar" ratingIcon/>

        <AboutWriter src="https://github.com/devnestali.png" title="Victor Nestali"/> 
       
        <Tag title="Ficção Científica" />
        <Tag title="Drama" />
        <Tag title="Família" />
        
      </main>

    </Container>
  )
}