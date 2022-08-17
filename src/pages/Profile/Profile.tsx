import Header from "../Header/Header";
import MainProfile from "./MainProfile";
import "./Profile.css"


export default function Profile(){
    return(
       <div>
        <Header/>
        <div className="profile">
            <MainProfile/>
        </div>
       </div>
    )
}