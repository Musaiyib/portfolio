import './About.scss'

export default function About({removeActive}) {
    return (
        <div className="about" id="about" onClick={removeActive}>
            <div className="aboutContent">
                <h1>about</h1>
            </div>
        </div>
    )
}
