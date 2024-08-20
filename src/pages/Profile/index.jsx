import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./styles";

import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText title="Voltar" to="/" buttonIcon/>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/devnestali.png" 
            alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

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