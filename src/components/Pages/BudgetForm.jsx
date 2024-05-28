import './BudgetForm.css';
import { PhoneCallIcon, MailIcon, MapPinIcon } from 'lucide-react';
import { app } from '../../firebase';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { toast } from "react-toastify";

function BudgetForm() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [favoriteOnly, setFavoriteOnly] = useState('');
  const [jobType, setJobType] = useState('');
  const [numberOfPages, setNumberOfPages] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailValid) {
      toast.error("Please correct the errors in the form.");
      return;
    }
    createSale({
      name,
      lastname,
      email,
      favoriteOnly,
      jobType,
      numberOfPages,
      budget,
      message
    })
    .then(() => {
      toast.success("The form has been sent successfully");
      setName("");
      setLastname("");
      setEmail("");
      setFavoriteOnly("");
      setJobType("");
      setNumberOfPages("");
      setBudget("");
      setMessage("");
      setEmailError("");
      setIsEmailValid(false);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const createSale = async (saleDetails) => {
    const db = getFirestore(app);
    const salesCollection = collection(db, 'sales');
    const sale = {
      ...saleDetails,
      favoriteOnly: favoriteOnly,
      jobType: jobType,
      timestamp: serverTimestamp(),
    };
    try {
      await addDoc(salesCollection, sale);
    } catch (error) {
      console.error("Error when creating the sales document", error);
      throw error;
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$/i;
    if (!emailPattern.test(value)) {
      setEmailError('Please enter a valid email from @gmail.com, @hotmail.com, or @outlook.com');
      setIsEmailValid(false);
    } else {
      setEmailError('');
      setIsEmailValid(true);
    }
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 md:flex md:space-x-6">
          <div className="infoForm md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
            <p className="mb-4">
              This form will be useful for us to coordinate a first meeting, either virtual or in person. During the meeting, you will be able to tell us what kind of work you want to do, if you prefer to use one of our predefined templates or if you are looking for something more personalized.
            </p>
          </div>
          <form autoComplete="off" onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" id="name" placeholder="Your name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">LastName</label>
              <input type="text" name="lastname" id="lastname" placeholder="Your lastname" className="mt-1 p-2 w-full border border-gray-300 rounded-md" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="estangeno@gmail.com"
                className={`mt-1 p-2 w-full border rounded-md ${emailError ? 'border-red-500' : ''} ${isEmailValid ? 'border-green-500' : ''}`}
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="favoriteOnly" className="block text-sm font-medium text-gray-700">Select job type</label>
              <select name="favoriteOnly" id="favoriteOnly" className="mt-1 p-2 w-full border border-gray-300 rounded-md" value={favoriteOnly} onChange={(e) => setFavoriteOnly(e.target.value)} >
                <option value="">-</option>
                <option value="Bug fixes">Bug fixes</option>
                <option value="Correction of code">Correction of code</option>
                <option value="Web Page">Web Page</option>
                <option value="Web Site">Web Site</option>
                <option value="E-Commerce">E-Commerce</option>
              </select>
            </div>
            <div>
              <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">Web Design</label>
              <select name="jobType" id="jobType" className="mt-1 p-2 w-full border border-gray-300 rounded-md" value={jobType} onChange={(e) => setJobType(e.target.value)}>
                <option value="">-</option>
                <option value="Default design">Default design</option>
                <option value="Customize design">Customize design</option>
              </select>
            </div>
            <div>
              <label htmlFor="numberOfPages" className="block text-sm font-medium text-gray-700">Number of Pages</label>
              <select name="numberOfPages" id="numberOfPages" className="mt-1 p-2 w-full border border-gray-300 rounded-md" value={numberOfPages} onChange={(e) => setNumberOfPages(e.target.value)} >
                <option value="">-</option>
                <option value="1 Page">1 Page</option>
                <option value="2 Pages">2 Pages</option>
                <option value="3 Pages">3 Pages</option>
                <option value="4 Pages">4 Pages</option>
                <option value="5 or more Pages">5 or more Pages</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
              <select name="budget" id="budget" className="mt-1 p-2 w-full border border-gray-300 rounded-md" value={budget} onChange={(e) => setBudget(e.target.value)} >
                <option value="">-</option>
                <option value="100 a 499">100 a 499</option>
                <option value="500 a 999">500 a 999</option>
                <option value="1000 a 1999">1000 a 1999</option>
                <option value="2000 a 2999">2000 a 2999</option>
                <option value="3000 o más">3000 o más</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" placeholder="Tell us your idea for a next meeting, either face-to-face or virtual." className="mt-1 p-2 w-full border border-gray-300 rounded-md" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
            </div>
            <input type="submit" name="enviar" value="Send message" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-150" data-twe-ripple-init />
          </form>
        </div>
      </div>
      <footer className="flex flex-col items-center text-center text-surface dark:bg-neutral-700 dark:text-white border-t-2 border-gray-700 mt-6 py-6">
        <div className='container mx-auto'>
          <div className='mb-6 flex justify-center space-x-4'>
           {/* Gmail */}
              <a 
              href="#"
              type='button'
              className='rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900'
              data-twe-ripple-init>
              <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </span>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/estani_genoud/"
              target="_blank"
              type="button"
              className='rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900'
              data-twe-ripple-init>
              <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>
            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/estanislao-genoud-a6946020b/"
              target="_blank"
              type="button"
              className='rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900'
              data-twe-ripple-init>
              <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
              
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
            {/* Github */}
            <a href="https://github.com/EstanislaoGenoud"
              target="_blank"
              type="button"
              className='rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900'
              data-twe-ripple-init>
                <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 496 512">
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </span>
              </a>
          </div>
          <div className='text-center text-sm font-bold text-primary dark:text-white'>
            EstaniCode &copy; 2024 Copyright. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
export default BudgetForm;