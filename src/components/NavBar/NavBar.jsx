import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Popover } from '@headlessui/react'
import { 
  ArrowPathIcon, 
  Bars3Icon,
  ChartPieIcon, 
  CursorArrowRaysIcon, 
  FingerPrintIcon, 
  SquaresPlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import './NavBar.css'

function NavBar(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const imgLog = '../../Assets/EcodeisotipoBlanco.svg'
  const imgLogMoB= '../../Assets/E-codeIsotipo.png'

  const handleScrollToSection = (sectionId, event) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  }
  return(
    <header className="bg-slate-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 border-b-2 border-gray-700" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to='/'>
            <img className='w-12' src={imgLog} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <Link to='/' className='text-sm font-semibold leading-6 text-white'>Home</Link>
          <a href="#features-section" onClick={(e) => handleScrollToSection('features-section', e)} className='text-sm font-semibold leading-6 text-white'>Features</a>
          <a href='#ourWorks-section' onClick={(e) => handleScrollToSection('ourWorks-section', e)} className='text-sm font-semibold leading-6 text-white'>Our Works</a>
          <Link to='/budgetform' className='text-sm font-semibold leading-6 text-white'>Budget</Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to='/budgetform' className='BtnPersonal'>Hire Me</Link>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className='flex items-center justify-between'>
            <Link to='/' className="-m-1.5 p-1.5">
              <img className='h-8 w-auto' src={imgLogMoB} alt="" />
            </Link>
            <button type="button" className='-m-2.5 rounded-md p-2.5 text-gray-700' onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>Close Menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className="space-y-2 py-6">
                <Link to='/' className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <a href='#features-section' onClick={(e) => handleScrollToSection('features-section', e)} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                <a href='#ourWorks-section' onClick={(e) => handleScrollToSection('ourWorks-section', e)} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Our Works</a>
                <Link to='/budgetform' className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Budget</Link>
              </div>
              <div className="py-6">
                <Link to='/budgetform' className='BtnPersonal' onClick={() => setMobileMenuOpen(false)}>Hire Me</Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      
    </header>
  )
}
export default NavBar