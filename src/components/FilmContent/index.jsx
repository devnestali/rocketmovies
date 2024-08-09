/* eslint-disable react/prop-types */
import { Rating } from "../Rating";
import { Tag } from "../Tag";
import { Text } from "../Text";
import { Title } from "../Title";
import { Container } from "./styles";

export function FilmContent({ title, text, tagName = [], ...rest }) {
  return (
    <Container>
      <Title title={title}/>
      <Rating />

      <Text 
        text={text}
        {...rest}
      />

      <Tag tagName={tagName}/>
      <Tag tagName={tagName}/>
      <Tag tagName={tagName}/>
    </Container>
  )
}