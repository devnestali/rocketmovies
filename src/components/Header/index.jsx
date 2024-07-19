import { Input } from "../Input";
import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
        <a href="/">RocketMovies</a>

        <Input placeholder="Pesquisar pelo título" />
          
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