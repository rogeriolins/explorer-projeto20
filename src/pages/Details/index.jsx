import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';


export function Details() {
  return (
    <Container>
      <Header />
      
      <main>
        <Content>
          
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.]
            Iure laboriosam aliquid, atque ducimus optio repellat quaerat
            nihil incidunt, velit ipsum eos, unde eveniet eaque nemo 
            reiciendis amet! Deserunt, culpa odio. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Dolorum at animi
            incidunt, earum deleniti necessitatibus nisi maiores, quas
            eveniet quos voluptates dolore quo placeat laudantium.
            Vitae sapiente corporis ad ut?
          </p>

          <Section title="Links úteis" >
            {/* Os itens Childres não são passados como propriedade comum
                são passados dentro do corpo do Section como Children
              */}
            <Links>
              <li>
                <a href="https://rocketseat.com.br">RocketSeat</a>
              </li>
              <li>
                <a href="https://rocketseat.com.br">RocketSeat</a>
              </li>
              <li>
                <a href="https://rocketseat.com.br">RocketSeat</a>
              </li>          
            </Links>

          </Section>

          <Section title="Marcadores" >
              <Tag title="Express" />
              <Tag title="NodeJS" />
          </Section>

        <Button title="Voltar"/>

      </Content>
      </main>

    </Container>
  );
}