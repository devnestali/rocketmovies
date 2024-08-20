import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" to="/" buttonIcon/>
            <h1>Novo filme</h1>
          </header>

          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações"/>

          <section>
            <h3>Marcadores</h3>
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </section>

          <div className="buttons">
            <Button title="Excluir filme" deleteButton/>
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}