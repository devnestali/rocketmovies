/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { FiArrowLeft} from "react-icons/fi"

export function ButtonText({ title, buttonIcon = false, ...rest }) {
  return (
    <Container 
      type="button"  
      {...rest}
    >
      {buttonIcon && <FiArrowLeft />}
      {title}
    </Container>
  );
}