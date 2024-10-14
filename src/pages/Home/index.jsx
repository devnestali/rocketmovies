import { ButtonAdd, Container, MainTop } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FiSearch, FiPlus } from "react-icons/fi";
import { Wrapper } from "../../components/Wrapper";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Header>
        <Input 
          className="search toDesktop"
          placeholder="Pesquisar pelo título"
        />
        <button className="mobileSearch"><FiSearch /></button>
      </Header>
      <main>
        <Wrapper>
          <MainTop>
            <h1>MeusFilmes</h1>
            <ButtonAdd to="/new">
              <FiPlus /> Adicionar filme
            </ButtonAdd>
          </MainTop>
          <Note />
        </Wrapper>
      </main>
    </Container>
  );
};