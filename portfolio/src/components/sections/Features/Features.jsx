import { Link } from "react-router-dom"
import './Features.css'
import { ArrowRightIcon  } from "@heroicons/react/24/outline"
import { Bug, Handshake } from "lucide-react"


function Features(){
  return(
    <>
      <div className="container mb-10">
        <h1 className="text-5xl text-white text-center">Our features</h1>
        <div className="features text-white">
          <div className="cardF">
            <div className="iconAndTitle">
              <span className="featuresIcon"><Bug className="h-8 w-6" /></span>
              <h2 className="text-3xl mb-2 ml-2">Fix your bugs</h2>
            </div>
              <div>
                <p className="text-lg">Do you have a problem in your codes? Let me know and I'll help you fix it. </p>
              </div>
              <Link to='/' className='linkPersonal flex items-center gap-1'>Join now <ArrowRightIcon className="h-3 w-3"/></Link>
          </div>
          <div className="cardF">
            <div className="iconAndTitle">
              <span className="featuresIcon"><Handshake className="h-8 w-6" /></span>
              <h2 className="text-3xl mb-2 ml-2">Cooperation</h2>
            </div>
            <div className="">
              <p className="text-lg">Do you want to work together? Send us an email and we will read it. </p>
            </div>
              <Link to='/' className='linkPersonal flex items-center gap-1'>Join now <ArrowRightIcon className="h-3 w-3"/></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features