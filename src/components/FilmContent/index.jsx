/* eslint-disable react/prop-types */
import { useAuth } from "../../hooks/auth";
import { Rating } from "../Rating";
import { Tag } from "../Tag";
import { Text } from "../Text";
import { Title } from "../Title";
import { Container } from "./styles";

export function FilmContent({ title, text, tags, ...rest }) {  
  return (
    <Container>
      <Title title={title}/>
      <Rating />

      <Text 
        text={text}
        {...rest}
      />

      {tags}

    </Container>
  )
}