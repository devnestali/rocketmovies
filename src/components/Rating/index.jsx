import { Container } from "./styles";

import { VscStarFull, VscStarEmpty } from "react-icons/vsc";

export function Rating({ isbigsize, grade}) {
  let stars = [];

  for (let cont = 1; cont <= 5; cont++){
    if(cont <= grade) {
      stars.push(<VscStarFull key={cont} />)
    } else {
      stars.push(<VscStarEmpty key={cont} />)
    }
  };

  return <Container isbigsize={isbigsize}>{stars}</Container>;
}