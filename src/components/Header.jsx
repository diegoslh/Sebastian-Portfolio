import langs from '../assets/languages/languages.json'
import linkedinIcon from '../assets/icons/linkedin.svg'
import githubIcon from '../assets/icons/github.svg'
import sunIcon from '../assets/icons/sun-svgrepo.svg'
import moonIcon from '../assets/icons/moon-svgrepo.svg'

import { useEffect, useState } from 'react'

function Header({ lang }) {

  const [theme, seTheme] = useState(sessionStorage.getItem('theme') || 'light')
  let themeIcon = (theme === 'light') ? sunIcon : moonIcon
  let root = document.getElementById('root');
  useEffect(() => {
    if (theme === 'dark') {
      root.classList.add('dark_theme')
      root.classList.remove('light_theme')
    } else {
      root.classList.remove('dark_theme')
      root.classList.add('light_theme')
    }
    sessionStorage.setItem('theme', theme)
  }, [theme, root])

  return (
    <header className="row hd_content">
      <nav className='navbar_links'>
        <a href="#experience">{langs[lang]?.exp_title}</a>
        <a href="#skills">{langs[lang]?.skills_title}</a>
        <a href="#projects">{langs[lang]?.projects_title}</a>
        <a href="#about">{langs[lang]?.about_title}</a>

        {/* <button type='button' onClick={() => seTheme(theme === 'light' ? 'dark' : 'light')} className='btn btn-outline-secondary btn-sm'>
          <img src={themeIcon} alt="Theme Icon" height="20px" />
        </button> */}
      </nav>

      <br />

      <section className='col-lg-12 hd_presentation'>
        <h1>{langs[lang]?.header_h1}</h1>
        <h1>{langs[lang]?.header_name}</h1>
        <span>{langs[lang]?.header_position}</span>
      </section>

      <section className='col-lg-12 hd_links'>
        <a href="https://www.linkedin.com/in/diego-sebasti%C3%A1n-ladino-hern%C3%A1ndez-85bb0532b/" target="_blank" rel="noopener noreferrer" className='btn hd_btns'>
          <img src={linkedinIcon} alt="LinkedIn Icon" height="24px" />
          LinkedIn
        </a>
        <a href="https://github.com/diegoslh" target="_blank" rel="noopener noreferrer" className='btn hd_btns'>
          <img src={githubIcon} alt="GitHub Icon" height="24px" />
          GitHub
        </a>
      </section>
    </header>
  )
}

export default Header