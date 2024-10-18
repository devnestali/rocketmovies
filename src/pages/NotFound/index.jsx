import { Container } from "./styles";

import { BsEmojiFrown } from "react-icons/bs";

import { Button } from "../../components/Button";
export function NotFound() {
    return (
        <Container>
            <div className="title">
                <h1>Página não encontrada</h1>
                <BsEmojiFrown />
            </div>
            <p>A página que você tentou acessar não existe ou não está disponível!</p>
            <Button 
                title="Voltar para a página inicial"
            />
        </Container>
    )
}