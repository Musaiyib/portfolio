import './Projects.scss'

export default function Projects({removeActive}) {
    return (
        <div className="projects" id="projects" onClick={removeActive}>
            <div className="projectsContainer">
                <h2>My projects</h2><br />
                <div className="allProjects">
                    <div className="project">
                        <img src="../../img/ses bgg.jpg" width="70px" height="50" alt="project-pic"/>
                        <h3>portfolio</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
