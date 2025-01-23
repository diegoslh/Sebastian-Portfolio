import langs from '../assets/languages/languages.json'
import FormContact from './FormContact.jsx'
import DownloadCV from './DownloadCV.jsx'

function AboutMe({ lang }) {
  return (
    <>
      <article className="row" id='about'>
        <header>
          <h2 className='subtitles'>{langs[lang]?.about_title}</h2>
          <br />
        </header>

        <section className='col-lg-8 card_about'>
          <p>{langs[lang]?.about_description1}</p>
          <p>{langs[lang]?.about_description2}</p>
          <p>{langs[lang]?.about_description3}</p>
        </section>
      </article>

      <footer className="row" id='contact'>
        <section className='col-lg-12 mb-3'>
          < DownloadCV text={langs[lang]?.cv_donwload} />
          {/* <FormContact lang={lang} /> */}
        </section>
        <code className='text-center mt-4 text-secondary fs-8'>
          {langs[lang]?.development} - © 2025
        </code>
      </footer>
    </>
  )
}

export default AboutMe