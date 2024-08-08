import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header(){
    return (
        <Container>   
            <Profile to="/profile">
                <img 
                    src="https://github.com/rogeriolins.png"
                    alt="Foto do Usuário" 
                />
                <div>
                    <span>Bem vindo!</span>
                    <strong>Rogério Lins</strong>
                </div>                
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    );
}