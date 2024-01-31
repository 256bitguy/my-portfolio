import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AboutMe from './components/AboutMe/AboutMe';
import Academics from './components/Academics/Academics';
import Achievements from './components/Achievements/Achievements';
import Certification from './components/Certification/Certification';
import Images from './components/Images/Images';
import Projects from './components/Projects/Projects';
import Navigation from './components/common/Navigation';
 

const App=()=> {
  
      const router=createBrowserRouter([
    {
      path:'/',
      element:<AboutMe/>
    },
    {
      path:'/academics',
      element:<Academics/>
    },
    {
      path:'/achievements',
      element:<Achievements/>
    },
    {
    path:'/certification',
    element:<Certification/>
    },
    {
      path:'/images',
      element:<Images/>
    }, {
      path:'/projects',
      element:<Projects/>
    }
  ]
    
  )
   

  return (
    <div>
    <RouterProvider router={router}/>
       
    </div>
  )
}

export default App;
