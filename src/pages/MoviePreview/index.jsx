import { Container } from "./styles";
import { Header } from "../../components/Header";
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { Rating } from "../../components/Rating";

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

        <div className="aboutWriter">
          <div className="author">
            <img 
              src="https://github.com/devnestali.png" 
              alt="Foto de usuário" 
            />
            <p>Por <span>Victor Nestali</span></p>
          </div>

          <div className="timeWasWritten">
            <p><FiClock size={20} /> 25/05/22 às 08:00</p>
          </div>
        </div> 
       
        
      </main>

    </Container>
  )
}