import langs from '../assets/languages/languages.json'
import CardProject from './CardProject.jsx'
import projectJuzgado1 from '../assets/images/projectJuzgado-1.png'
import projectJuzgado2 from '../assets/images/projectJuzgado-2.png'
import projectJuzgado3 from '../assets/images/projectJuzgado-9.png'
import projectDDNE1 from '../assets/images/projectDDNE-1.png'
import projectDDNE2 from '../assets/images/projectDDNE-2.png'
import projectDDNE3 from '../assets/images/projectDDNE-3.png'
import projectLVC1 from '../assets/images/projectLVC-1.png'
// import projectLVC2 from '../assets/images/projectLVC-2.png'

function Projects({ lang }) {
  return (
    <article id='projects'>
      <header className='col-lg-12'>
        <h2 className='subtitles'>{langs[lang]?.projects_title}</h2>
        <p className='w-75 mx-auto wrap-balance'>{langs[lang]?.projects_subtitle}</p>
        <br />
      </header>

      <section className='row'>
        <div className="col-lg-6 mb-3">
          <CardProject
            id='project1'
            project={langs[lang]?.projects_name1}
            description={langs[lang]?.projects_description1}
            link='http://'
            img1={projectJuzgado1}
            img2={projectJuzgado2}
            img3={projectJuzgado3}
          >
            <span className="proj_target">React</span>
            <span className="proj_target">TypeScript</span>
            <span className="proj_target">NodeJS</span>
            <span className="proj_target">MySQL</span>
          </CardProject>
        </div>
        <div className="col-lg-6 mb-3">
          <CardProject
            id='project2'
            project={langs[lang]?.projects_name2}
            description={langs[lang]?.projects_description2}
            link='http://'
            img1={projectDDNE1}
            img2={projectDDNE2}
            img3={projectDDNE3}
          >
            <span className="proj_target">React</span>
            <span className="proj_target">Bootstrap</span>
            <span className="proj_target">NodeJS</span>
            <span className="proj_target">MySQL</span>
          </CardProject>
        </div>
      </section>

      <section className='row mt-2'>
        <div className="col-lg-6 mb-3">
          <CardProject
            id='project3'
            project={langs[lang]?.projects_name3}
            description={langs[lang]?.projects_description3}
            link='http://'
            img1={projectLVC1}
            img2={projectLVC1}
            img3={projectLVC1}
          >
            <span className="proj_target">Razor</span>
            <span className="proj_target">ASP.NET Core</span>
            <span className="proj_target">EF CORE</span>
            <span className="proj_target">SQL Server</span>
          </CardProject>
        </div>
        <div className="col-lg-6 mb-3">
          {/* COF Project */}
        </div>
      </section>

    </article>
  )
}

export default Projects