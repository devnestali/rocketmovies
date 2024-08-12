import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" href="/" buttonIcon/>
            <h1>Novo filme</h1>
          </header>

          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações"/>
        </Form>
      </main>
    </Container>
  )
}