import {Container, NameText, Progress, UserPicture} from "./styles"
import { IUserinfo } from "./Type"

const UserInfo = ({nome, image , percentual}:IUserinfo) =>{
return(
    <Container>
        <UserPicture src ={image}/>
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual ={percentual}/>
        </div>
    </Container>
)
} 

export {UserInfo}