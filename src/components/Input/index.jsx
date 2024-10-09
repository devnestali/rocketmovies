import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Input({ icon: Icon, onChange, ...rest}) {
  return (
    <Container>
      
      {Icon && <Icon size={20} />}
      <input 
        onChange={onChange}  
        {...rest} 
      />

    </Container>
  )
}