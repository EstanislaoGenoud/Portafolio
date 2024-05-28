import { Link } from "react-router-dom"
import './Banner.css'

function Banner(){

  return(
    <>
      <div className="container mx-auto text-center personal text-white personal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0 box">
          <div className="p-4">
            <h2 className="text-2xl md:text-3xl">Start Project</h2>
          </div>
          <div className="p-4">
            <p className="text-lg md:text-xl">Interested in working together? We should do it, Contact me.</p>
          </div>
          <div className="p-4">
            <Link to="/budgetform" className="BtnPersonal py-2 px-4 md:py-3 md:px-6 text-base md:text-lg">Hire Me</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default Banner