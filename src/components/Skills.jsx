import langs from '../assets/languages/languages.json'
import htmlIcon from '../assets/icons/bxl-html5.svg'
import cssIcon from '../assets/icons/bxl-css3.svg'
import jsIcon from '../assets/icons/bxl-javascript.svg'
import reactIcon from '../assets/icons/bxl-react.svg'
import bootstrapIcon from '../assets/icons/bootstrap-fill.svg'
import tpsIcon from '../assets/icons/bxl-typescript.svg'
import nodeIcon from '../assets/icons/bxl-nodejs.svg'
import expressIcon from '../assets/icons/bxl-express-js.svg'
import mysqlIcon from '../assets/icons/bxl-mysql.svg'
import dotnetIcon from '../assets/icons/bxl-net-core.svg'
import sqlserverIcon from '../assets/icons/bxl-microsoft-sql-server.svg'
import gitIcon from '../assets/icons/bxl-git.svg'
import githubIcon from '../assets/icons/github.svg'
import azureIcon from '../assets/icons/bxl-azure.svg'
import vscodeIcon from '../assets/icons/bxl-vs-code.svg'
import visualstudioIcon from '../assets/icons/bxl-visual-studio.svg'
import riderIcon from '../assets/icons/bxl-rider-jetbrains.svg'
import dockerIcon from '../assets/icons/bxl-docker.svg'
import razorIcon from '../assets/icons/bxl-razor.svg'
import csharpIcon from '../assets/icons/bxl-csharp.svg'
import jqueryIcon from '../assets/icons/bxl-jquery.svg'
import efCoreIcon from '../assets/icons/bxl-ef-core.png'


function Skills({ lang }) {
  return (
    <article className="row" id='skills'>
      <header>
        <h2 className='subtitles'>{langs[lang]?.skills_title}</h2>
        <p className='w-75 mx-auto wrap-balance'>{langs[lang]?.skills_subtitle}</p>
        <br />
      </header>

      <section className="col-lg-6 mb-3">
        <div className="card_tools ms-auto">
          <h3>Frontend</h3>
          <ul className='sk_ul_tools'>
            <li>
              <img src={htmlIcon} alt="html icon" width="45px" />
              HTML
            </li>
            <li>
              <img src={cssIcon} alt="css icon" width="45px" />
              CSS
            </li>
            <li>
              <img src={jsIcon} alt="Js icon" width="45px" />
              JavaScript
            </li>
            <li>
              <img src={reactIcon} alt="React icon" width="45px" />
              React
            </li>
            <li>
              <img src={tpsIcon} alt="TypeScript icon" width="45px" />
              TypeScript
            </li>
            <li>
              <img src={razorIcon} alt="Razor icon" width="45px" />
              Razor Pages
            </li>
            <li>
              <img src={bootstrapIcon} alt="Bootstrap icon" width="45px" />
              Bootstrap
            </li>
            <li>
              <img src={jqueryIcon} alt="JQuery icon" width="45px" />
              JQuery
            </li>
          </ul>
        </div>
      </section>

      <section className="col-lg-6 mb-3">
        <div className="card_tools me-auto">
          <h3>Backend</h3>
          <ul className='sk_ul_tools'>
            <li>
              <img src={dotnetIcon} alt="Dotnet icon" width="45px" />
              .Net
            </li>
            <li>
              <img src={csharpIcon} alt="C# icon" width="45px" />
              C#
            </li>
            <li>
              <img src={efCoreIcon} alt="EFCore icon" width="45px" />
              EF Core
            </li>
            <li>
              <img src={nodeIcon} alt="Node.js icon" width="45px" />
              Node.js
            </li>
            <li>
              <img src={expressIcon} alt="Express icon" width="45px" />
              Express
            </li>
            <li>
              <img src={sqlserverIcon} alt="SQL Server icon" width="45px" />
              SQL Server
            </li>
            <li>
              <img src={mysqlIcon} alt="MySQL icon" width="45px" />
              MySQL
            </li>
          </ul>
        </div>
      </section>

      <section className="col-lg-12 mb-3">
        <div className="card_tools mx-auto">
          <h3>{langs[lang]?.skills_card3}</h3>
          <ul className='sk_ul_tools'>
            <li>
              <img src={gitIcon} alt="Git icon" width="45px" />
              Git
            </li>
            <li>
              <img src={githubIcon} alt="GitHub icon" width="45px" />
              GitHub
            </li>
            <li>
              <img src={azureIcon} alt="Azure icon" width="45px" />
              Azure DeVops
            </li>
            <li>
              <img src={vscodeIcon} alt="VSCode icon" width="45px" />
              VSCode
            </li>
            <li>
              <img src={visualstudioIcon} alt="Visual Studio icon" width="45px" />
              Visual Studio
            </li>
            <li>
              <img src={riderIcon} alt="Rider icon" width="45px" />
              Rider
            </li>
            <li>
              <img src={dockerIcon} alt="Docker icon" width="45px" />
              Docker
            </li>
          </ul>
        </div>
      </section>
    </article>
  )
}

export default Skills