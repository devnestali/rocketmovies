/* eslint-disable react/prop-types */
import { Rating } from "../Rating";
import { Tag } from "../Tag";
import { Text } from "../Text";
import { Title } from "../Title";
import { Container } from "./styles";

export function FilmContent({ title, text, tagName = [], ...rest }) {
  let tagNames = tagName.split(',')
  
  
  return (
    <Container>
      <Title title={title}/>
      <Rating />

      <Text 
        text={text}
        {...rest}
      />

      <Tag tagName={tagNames[0]}/>
      <Tag tagName={tagNames[1]}/>
      <Tag tagName={tagNames[2]}/>
    </Container>
  )
}