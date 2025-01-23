import langs from '../assets/languages/languages.json'
import { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react'
import { toast } from 'sonner'

function FormContact({ lang }) {
  const [state, handleSubmit] = useForm("xkggdbaa");

  useEffect(() => {
    if (state.succeeded) {
      toast.success(langs[lang]?.contact_success);
      setTimeout(() => window.location.reload(), 2000);
    } else if (state.errors) {
      toast.error(langs[lang]?.contact_error);
    }
  }, [state, lang]);

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal">
        {langs[lang]?.contact_title}
      </button>

      {/* <!-- Modal --> */}
      <article className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <form className="modal-content" onSubmit={handleSubmit}>
            <header className="modal-header">
              <h4 className="modal-title w-100 text-center" id="contactModalLabel">{langs[lang]?.contact_title}</h4>
            </header>

            <section className="modal-body">
              <label htmlFor="email" className='form-label'>
                {langs[lang]?.contact_email}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className='form-control'
                placeholder={langs[lang]?.contact_email_placeholder}
                autoFocus
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <br />
              <label htmlFor="message" className='form-label'>
                {langs[lang]?.contact_message}
              </label>
              <textarea
                id="message"
                name="message"
                className='form-control'
                rows={3}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </section>

            <footer className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                {langs[lang]?.contact_close}
              </button>
              <button type="submit" className="btn btn-primary" disabled={state.succeeded}>
                {langs[lang]?.contact_send}
              </button>
            </footer>
          </form>
        </div>
      </article>
    </>
  )
}

export default FormContact