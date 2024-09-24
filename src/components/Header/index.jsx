import { Input } from "../Input";
import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
        <a to="/">RocketMovies</a>

        <Input placeholder="Pesquisar pelo título" />
          
        <Profile to="/profile">
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