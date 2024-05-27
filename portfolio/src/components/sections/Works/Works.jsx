import CardsWorks from './CardsWorks'
import './Cards.css'

function Works(){
  return(
    <>
      <div className="container mb-10">
        <h2 className="text-5xl text-white text-center mb-5">Our Works</h2>
        <div className="works text-white">
          <section className='cardSection'>
            <CardsWorks 
            title={"Road Cycling"}
            
            img={"../../Assets/roadcycling.jpeg"}
            desc={"Road Cycling is a Web Site that has a home page and 4 pages, it has a photo gallery of 36 images, which have animations. All the pages are responsive, that is to say; it adapts to different screen sizes."}
            link={"https://proyecto-final-genoud.vercel.app/"}/>
            <CardsWorks 
            title={"Genoud Distribuciones"}
            img={"../../Assets/genouddistribuciones.jpeg"}
            desc={"Genoud Distribuciones is a Web Site in development that has a home page and 4 pages. The home page has a photo gallery in carrousel, all pages are responsive, that is to say; they adapt to different screen sizes."}
            />
            <CardsWorks 
            title={"Store Bike Competicion"}
            img={"../../Assets/storeBikeCompeticion.jpeg"}
            desc={"Store Bike Competicion is an E-commerce, has a payment gateway, a product catalog and all sections are responsive, and adapt to different screen sizes."}
            link={"https://proyecto-final-react-genoud.vercel.app/"}/>
          </section>
        </div>
      </div>
    </>
  )
}

export default Works