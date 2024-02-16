import '../css/project.css';

const ProjectLeft = ({ image, title, description, siteUrl, repoUrl }) => {
  return (
    <div className="project">
      <img className='port-image' src={image} alt={title} />
      <div className='project-content'>
        <h1>{title}</h1>
        <p id='description'>{description}</p>
        <a id='view-site' href={siteUrl}>View Site</a>
        <a id='github' href={repoUrl}>GitHub Repo</a>
      </div>
    </div>
  );
}

const ProjectRight = ({ image, title, description, siteUrl, repoUrl }) => {
  return (
    <div className="project-right">
      <img className='port-image' src={image} alt={title} />
      <div className='project-content'>
        <h1>{title}</h1>
        <p id='description'>{description}</p>
        <a id='view-site' href={siteUrl}>View Site</a>
        <a id='github' href={repoUrl}>GitHub Repo</a>
      </div>
    </div>
  );
}

export { ProjectLeft, ProjectRight };