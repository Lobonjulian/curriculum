import { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import Header from './components/Header';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import CVPreview from './components/CVPreview';

function App() {
  const [state, setState] = useState([
    {
      firstName: 'Carlos Andres',
      lastName: 'Lopez Ruiz',
      phone: 3210000000,
      email: 'carlos@example.com',
      jobPosition: 'Frontend Developer',
      address: 'Calle 1 # 1-1',
      bio: 'Sometimes I get confused and try to smell the stars...',
    },
  ]);

  const [education, setEducation] = useState([
    {
      school: 'Moon Space Lab',
      degree: 'BSc Kerbal Science',
      fieldOfStudy: 'Estimated 5 years',
      startDate: '2020-06',
      endDate: '2024-06',
      description: "I'm a big fan of the moon",
    },
  ]);

  const [experiencie, setExperience] = useState([
    {
      employer: 'Space X',
      job: 'Frontend Developer',
      startDate: '2021-12',
      endDate: '2023-12',
      description: 'lorem ipums',
    },
  ]);
  return (
    <>
      <Header />
      <main>
        <Accordion title={'Personal Info'}>
          <Personal state={state} setState={setState} />
        </Accordion>
        <Accordion title={'Education'}>
          <Education state={education} setState={setEducation} />
        </Accordion>
        <Accordion title={'Experience'}>
          <Experience state={experiencie} setState={setExperience} />
        </Accordion>
      </main>
      <aside>
        <CVPreview
          education={education}
          experience={experiencie}
          personal={state}
        />
      </aside>
      <Footer />
    </>
  );
}

export default App;
