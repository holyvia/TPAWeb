import { Avatar } from '@material-ui/core'
import './DefaultProfile.css'

export default function DefaultProfile(){
    return(
        <div className='default__profile'>
            <div className="cover__photo">

            </div>
            <Avatar className='profile__photo' src='https://picsum.photos/200'></Avatar>
            <h3>Name</h3>
            <h4>Education</h4>
            <div className='sub__information'>
                <p>Address information</p>
                <p className='mid__dot'> . </p>
                <p className='contact__info'>Contact info</p>
            </div>
            <p className='connection'>56 Connection</p>
            <div className="buttons">
                <button className='add__exp__btn'>Add experience</button>
                <button className='add__edu__btn'>Add education</button>
                <button className='save__btn'>Save as pdf</button>
            </div>
        </div>
    )
}