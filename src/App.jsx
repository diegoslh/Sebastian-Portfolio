import { useState } from 'react'

import './assets/styles/Shared.css'
import './assets/styles/AboutMe.css'
import './assets/styles/Experience.css'
import './assets/styles/Header.css'
import './assets/styles/Projects.css'
import './assets/styles/Skills.css'
import './assets/styles/Themes.css'

import { Toaster } from 'sonner'
import Header from './components/Header.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import AboutMe from './components/AboutMe.jsx'
import Translate from './components/Translate.jsx'

function App() {
  // Obtener el idioma predefinido del navegador
  const getBrowserLanguage = () => {
    const langBrowser = navigator.language || navigator.userLanguage;
    return langBrowser.startsWith('es') ? 'es' : 'en';
  };

  const [language, setLanguage] = useState(getBrowserLanguage)

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <main className='container-lg cont_main'>
      <br /><br />
      <Header lang={language} />
      <Translate language={language} handleChangeLanguage={handleChangeLanguage} />
      <Experience lang={language} />
      <Skills lang={language} />
      <Projects lang={language} />
      <AboutMe lang={language} />
      <Toaster position="bottom-center" richColors />
    </main>
  )
}

export default App
