import { Container } from "./styles";
import { Button } from '../../components/Button';

export function Details() {
  return (
    <Container>
      <h1>RocketNotes</h1>
      <span>Rogerio Lins</span>
      <Button title="Entrar" loading />
      <Button title="Cadastrar"/>
      <Button title="Listar"/>
      <Button title="Voltar"/>
    </Container>
  );
}