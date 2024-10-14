import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";

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
    </Container>
  );
};