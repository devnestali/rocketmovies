/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { FiClock} from "react-icons/fi"

export function AboutWriter({ src, title,  ...rest }) {
  return (
    <Container>
      <div>
        <img 
          src={src} 
          alt="Foto de usuário" 
          {...rest}
        />
        <p>Por <span>{title}</span></p>
      </div>

      <div className="timeWasWritten">
        <p><FiClock size={20} /> 25/05/22 às 08:00</p>
      </div>
    </Container>
  )
}