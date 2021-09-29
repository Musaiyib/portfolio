import './Appbar.scss'
// import logo from '../../img/logo.png'
import sesLogo from '../../img/ses.png'
import { Mail, Person} from '@material-ui/icons'

export default function Appbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"appbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="sesLogo"><img src={sesLogo} alt="sesLogo"  width={60} height={25}/></a>
                    <div className="itemContainer">
                    <Person className="icon"/>
                    <span className="navSpan" >+234 701 952 922</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span className="navSpan" >Myusoro@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
