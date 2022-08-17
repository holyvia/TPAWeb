import Feed from "../Feed/Feed";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import "./Homepage.css"

export default function Homepage() {
    return (
        <div className="app">
            <>
                <Header />
                <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
            </>
        </div>
    )
}