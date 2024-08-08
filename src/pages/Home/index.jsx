import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Rating } from "../../components/Rating";
import { Text } from "../../components/Text";
import { Tag } from "../../components/Tag";
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
          <Title title="Interstellar" />
          <Rating size={10} />
          
          <Text 
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae natus ipsa unde libero veritatis voluptatibus excepturi ipsum ea! Error voluptatem molestiae ratione labore nostrum! Nesciunt atque quaerat expedita voluptas error ipsam sint minima, corporis odit harum exercitationem ea voluptatem ipsa?"
            isATag
          />

          <Tag title="Ficção Científica" />
          <Tag title="Ficção Científica" />
          <Tag title="Ficção Científica" />

        </div>
      </main>
      
    </Container>
  )
}