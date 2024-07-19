import { Input } from "../Input";
import { Container, Profile } from "./styles";
import { FiSearch } from 'react-icons/fi'

export function Header() {
  return (
    <Container>
        <a href="/">RocketMovies</a>

        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
          
        <Profile>
          <div>
            <strong>Victor Nestali</strong>
            <button type="button">Sair</button>
          </div>

          <img 
            src="https://github.com/devnestali.png" 
            alt="Foto do usuário" 
          />
       </Profile>
    </Container>
  )
}