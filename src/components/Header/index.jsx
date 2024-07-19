import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
        <a href="/">RocketMovies</a>
          
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