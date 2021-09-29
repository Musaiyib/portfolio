import "./Menu.scss"

export default function Menu({menuOpen, removeActive}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <a href="#home"><li onClick={removeActive}> Home</li></a>
                <a href="#projects"> <li onClick={removeActive}>My Projects</li></a>
                <a href="#about"><li onClick={removeActive}>About Me</li></a>
                <a href="#contact"><li onClick={removeActive}>Contact Me</li></a>
                {/* <li href="#home"></li> */}
            </ul>
        </div>
    )
}
