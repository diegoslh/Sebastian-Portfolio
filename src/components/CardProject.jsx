
function CardProject({ id, project, description, link, img1, img2, img3, children }) {
  let idCarousel = `crsl${id}`
  console.log(idCarousel);
  
  return (
    <article className="card_project">
      <header>
        <article id={idCarousel} className="carousel carousel-dark slide" data-bs-ride="carousel">
          <section className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
          </section>

          <button className="carousel-control-prev" type="button" data-bs-target={`#${idCarousel}`} data-bs-slide="prev" style={{ width: '5%' }}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${idCarousel}`} data-bs-slide="next" style={{ width: '5%' }}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </article>
      </header>

      <h4>{project}</h4>
      <section className="proj_targets">
        {children}
      </section>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer"></a>
    </article>
  )
}

export default CardProject