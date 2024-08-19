import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

import { FiUser, FiMail, FiLock } from "react-icons/fi";

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText title="Voltar" href="/" buttonIcon/>
      </header>

      <Form>
        <Input 
          placeholder="Usuário"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}