import { TopBackground } from "./styles";
import UsersImage from '../../assets/users.png';


function DefaultTopBackgound() {



    return (
        <TopBackground>
            <img src={UsersImage} alt='imagem-usuarios' />
        </TopBackground>
    )
}

export default DefaultTopBackgound