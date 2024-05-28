import { Route, Routes } from 'react-router-dom'
import Home from '../sections/Home/Home'
import BudgetForm from '../Pages/BudgetForm'



function Main(){
  
  return(
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/budgetform" element={<BudgetForm />} />
      </Routes>
    </main>
  )
}

export default Main