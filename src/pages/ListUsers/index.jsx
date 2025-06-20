import { Button } from '../../components/Button/styles'
import DefaultTopBackgound from '../../components/TopBackground'

import {
    Container,
    ContainerUsers,
    InfoUsers,
    TrashIcon,
    UserImg
} from './styles'

import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import trash from '../../assets/trash.svg'
import { PageTittle } from '../../components/Tittle'


function ListUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()

    }, [])


    const navigate = useNavigate()

    return (
        <Container>

            <DefaultTopBackgound />

            <PageTittle>Lista de usuários</PageTittle>

            <ContainerUsers>

                {users.map((user) => (
                    <InfoUsers key={user.id}>

                        <UserImg src={`https://avatar.iran.liara.run/public?username=${user.id}`} />

                        <div >
                            <p>{user.name}</p>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={trash} />
                    </InfoUsers>

                ))}

            </ContainerUsers>

            <Button onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers

