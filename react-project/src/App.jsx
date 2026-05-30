import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import AppRoutes from './routes/app-routes'


const name = "Santhosh";

function App() {
  return <AppRoutes/>

  // return (
  //   <>
  //     {/* <h1>Hello {name}</h1> */}

  //     {/* <MainLayout>
  //       <HomeDashboard />
  //       <UserDashboard/>
  //     </MainLayout> */}
  //   </>
  // )
}

export default App
