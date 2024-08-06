import { Header } from "../../components/Header";
import { Container } from "./styles";
import { FiPlus } from "react-icons/fi"

export function Home() {
  return (
    <Container>
      <Header />
      
      <main>
        <div className="mainTitle">
          <h3>Meus Filmes</h3>
          <button><FiPlus /> Adicionar filme</button>
        </div>

        <div className="filmsContent">
          Filmes
        </div>
      </main>
      
    </Container>
  )
}