import langs from '../assets/languages/languages.json'
import ABPS from '../assets/images/LogoAmericas.png'

function Experience({ lang }) {

  return (
    <article className="row" id='experience'>
      <header className='col-lg-12'>
        <h2 className='subtitles'>{langs[lang]?.exp_title}</h2>
        <br />
      </header>

      <section className='col-lg-12 card_experience'>
        <header>
          <a href="https://www.americasbps.com.co/" target="_blank" rel="noopener noreferrer">
          <img src={ABPS} alt="Logo Américas BPS" width="170px"/>
          </a>
          <span>- {langs[lang]?.exp_position1}</span>
        </header>
        <p className='ps-1'>{langs[lang]?.exp_date1}</p>
        <ul>
          <li>{langs[lang]?.exp_funciones11}</li>
          <li>{langs[lang]?.exp_funciones12}</li>
          <li>{langs[lang]?.exp_funciones13}</li>
          <li>{langs[lang]?.exp_funciones14}</li>
          <li>{langs[lang]?.exp_funciones15}</li>
          <li>{langs[lang]?.exp_funciones16}</li>
          <li>{langs[lang]?.exp_funciones17}</li>
        </ul>
        
      </section>
    </article>
  )
}

export default Experience