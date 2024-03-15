import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'
import Footer from './components/Footer'
import Header from './components/Header'
import Personal from './components/Personal'

function App() {
  const [state, setState] = useState([ { 
    firstName: 'Carlos Andres',
  lastName: 'Lopez Ruiz',
  phone: 3210000000,
  email: 'carlos@example.com',
    jobPosition: "Frontend Developer",
    address: "Calle 1 # 1-1",
    bio: "Sometimes I get confused and try to smell the stars...",
    }]);

  return (
    <>
      <Header />
      <main> 
      <Accordion title={"Personal Info"}>
        <Personal state={state} setState={setState}/>
      </Accordion>
      </main>
      <Footer />
    </>
  )
}

export default App
