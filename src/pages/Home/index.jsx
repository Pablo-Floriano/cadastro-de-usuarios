import {
    Container,
    ContainerInputs,
    Form,
    Input,
    InputLabel,
    Title
} from '../Home/styles'

import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/styles'



import { useRef } from 'react'
import api from '../../services/api'
import DefaultTopBackgound from '../../components/TopBackground'
import { PageTittle } from '../../components/Tittle'

export default function Home() {

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    const navigate = useNavigate()

    async function registerNewUser() {
        await api.post('/usuarios', {
            email: inputEmail.current.value,
            age: parseInt(inputAge.current.value),
            name: inputName.current.value,
        })

        navigate('lista-de-usuarios')
    }

    return (
        <Container>

            <DefaultTopBackgound />

            <Form>
                <PageTittle> Cadastrar usuário</PageTittle>

                <ContainerInputs>

                    <div>
                        <InputLabel>
                            Nome<span> *</span>
                        </InputLabel>
                        <Input type='text' placeholder='Nome do usuário' ref={inputName} />
                    </div>

                    <div>
                        <InputLabel>
                            Idade<span> *</span>
                        </InputLabel>
                        <Input type='number' placeholder='Idade do usuário' ref={inputAge} />
                    </div>

                </ContainerInputs>

                <div style={{ width: '100%' }}>
                    <InputLabel>
                        E-mail<span> *</span>
                    </InputLabel>
                    <Input type='email' placeholder='E-mail do usuário' ref={inputEmail} />
                </div>

                <Button type='button' onClick={registerNewUser} theme={'primary'}>
                    Cadastrar usuário
                </Button>

            </Form>
            <Button type='button' onClick={()=> navigate('/lista-de-usuarios')
            }>Lista de usuários</Button>
        </Container>
    )
}