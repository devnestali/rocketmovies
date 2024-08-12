/* eslint-disable react/prop-types */
import { Container, IsATag, IsNotATag } from "./styles";

export function Text({ text, secondText, isATag = false }) {
  return (
    <Container>
      {isATag ? 
        <IsATag>{text}</IsATag> 
        : 
        <IsNotATag>
          {text}
          <IsNotATag>
            {secondText}
          </IsNotATag>
        </IsNotATag>
      }
    </Container>
  )
}