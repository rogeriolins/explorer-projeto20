import { Container, Form, BackgroundImg } from './styles';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp(){
    return (
        <Container>
            <BackgroundImg />

            <Form >
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input 
                   placeholder='Nome' 
                   type='text'
                   icon={FiUser}
                />
                <Input 
                   placeholder='E-mail' 
                   type='text'
                   icon={FiMail}
                />
                <Input 
                   placeholder='Senha' 
                   type='password'
                   icon={FiLock}
                />

                <Button title='Cadastrar' />
                <Link to="/">
                    Voltar ao Login
                </Link>
            </Form>
            
        </Container>
    );
}