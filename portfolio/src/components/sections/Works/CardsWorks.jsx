import { Link } from "react-router-dom"

function CardsWorks({img, title, desc, link}) {
  return(
    <>
      <div className="cardWorks">
        <div className="cardTitle">
          <span>{title}</span>
        </div>
        <div className="cardImg">
          <a href={link} target="_blank">
            <img src={img} alt={title}/>
          </a>
        </div>
        <div className="cardDesc">
          <p>{desc}</p>
        </div>
        <Link to="/" className="linkButton">Learn more</Link>
      </div>
    </>
  )
}

export default CardsWorks
