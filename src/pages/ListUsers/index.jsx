import { Button } from '../../components/Button/styles'
import DefaultTopBackgound from '../../components/TopBackground'

import { Container } from './styles'

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import api from '../../services/api'



function ListUsers(){

    useEffect(() => {

        async function getUsers() {
            const UsersFromApi = await api.get('/usuarios')
            console.log(UsersFromApi)
        }
        getUsers()
      
    }, [])
    

    const navigate = useNavigate()

    return(
        <Container>
            <DefaultTopBackgound/>
            <h1>lista de usuarios</h1>
            <Button onClick={()=> navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers

