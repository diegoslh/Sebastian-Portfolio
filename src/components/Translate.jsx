import languages from '../assets/languages/languages.json'
import colombiaIcon from '../assets/icons/flag-colombia.svg'
import eeuuIcon from '../assets/icons/flag-us.svg'

function Translate({ language, handleChangeLanguage }) {

  let flag = (language === 'es') ? colombiaIcon : eeuuIcon

  return (
    <section className='languages'>
      <div className="btn-group dropup">
        <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={flag} alt="Flag" height="20px" />
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item" onClick={() => handleChangeLanguage('es')}>
            <img src={colombiaIcon} alt="Flag" height="20px" className='me-2' />
            {languages[language]?.language1}
          </li>
          <li className="dropdown-item" onClick={() => handleChangeLanguage('en')}>
            <img src={eeuuIcon} alt="Flag" height="20px" className='me-2' />
            {languages[language]?.language2}
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Translate