import { Fragment, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import AdminLayout from './components/layout/Admin';
// Component public
import HomePage from './pages/public/home';
import LoginPage from './pages/public/login';
import RegisterPage from './pages/public/register';
// Component admin
import DashboardPage from './pages/admin/dashboard';
import PortfoliosPage from './pages/admin/portfolios';
import SkillsPage from './pages/admin/skills';

function App() {
   const [count, setCount] = useState(0);

   return (
      <Fragment>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<HomePage />}></Route>
               <Route path='login' element={<LoginPage />}></Route>
               <Route path='register' element={<RegisterPage />}></Route>

               <Route path='/' element={<AdminLayout />}>
                  <Route path='dashboard' element={<DashboardPage />} />
                  <Route path='skills' element={<SkillsPage />} />
                  <Route path='experiences' element={<DashboardPage />} />
                  <Route path='education' element={<DashboardPage />} />
                  <Route path='portfolios' element={<PortfoliosPage />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </Fragment>
   );
}

export default App;
