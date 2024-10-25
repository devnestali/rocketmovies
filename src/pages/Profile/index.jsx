import { Container, Header, Form, AvatarProfile } from "./styles"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { useState } from "react";

export function Profile() {
  const { userData, updateUser } = useAuth();

  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [inputNotBeenChanged, setInputNotBeenChanged] = useState(true);

  const avatar = userData.avatar
    ? `${api.defaults.baseURL}/file/${userData.avatar}`
    : avatarPlaceholder;

  const [avatarUrl, setAvatarUrl] = useState(avatar);
  const [avatarFile, setAvatarFile] = useState(null);


  function handleUpdate() {
    const dataUpdated = {
      newName: name,
      newEmail: email,
      newPassword: newPassword,
      currentPassword: password,
    };
  
    updateUser({ user: dataUpdated, avatar: avatarFile })
  }
  
  function handleUpdateAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);
    console.log(file)
  
    const tempUrl = URL.createObjectURL(file);
    setAvatarUrl(tempUrl);
    console.log(tempUrl)
  };
  
  return (
    <Container>
      <Header>
        <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
      </Header>
      <Form>
        <AvatarProfile>
          <img src={avatarUrl} alt={userData.name} />
          <label htmlFor="userPhoto">
            <FiCamera />
            <input
              type="file"
              id="userPhoto"
              accept="image/png, image/jpg"
              onChange={e => {
                handleUpdateAvatar(e)
                setInputNotBeenChanged(false);
              }}
            />
          </label>
        </AvatarProfile>
        <Input
          icon={FiUser}
          placeholder="Nome"
          value={name}
          onChange={e => {
            setName(e.target.value)
            setInputNotBeenChanged(false);
          }}
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={e => {
            setEmail(e.target.value)
            setInputNotBeenChanged(false);
          }}
        />
        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha atual"
          onChange={e => {
            setPassword(e.target.value)
            setInputNotBeenChanged(false)
          }}
        />
        <Input
          icon={FiLock}
          type="password"
          placeholder="Nova senha"
          onChange={e => {
            setNewPassword(e.target.value)
            setInputNotBeenChanged(false)
          }}
        />
        <Button
          title="Salvar"
          onClick={handleUpdate}
          disabled={inputNotBeenChanged}
        />
      </Form>
    </Container>
  )
} 