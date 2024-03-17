import { useState } from 'react';
import './styles/App.css';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import Header from './components/Header';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import CVPreview from './components/CVPreview';
import Skills from './components/Skills';

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
      description: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
    },
    {
      school: 'Moon Space Lab',
      degree: 'BSc Kerbal Science',
      fieldOfStudy: 'Estimated 5 years',
      startDate: '2020-06',
      endDate: '2024-06',
      description: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
    },
  ]);

  const [experiencie, setExperience] = useState([
    {
      employer: 'Space X',
      job: 'Frontend Developer',
      startDate: '2021-12',
      endDate: '2023-12',
      description: 'Incididunt anim adipisicing tempor minim irure velit ad excepteur laborum non est. Do incididunt eiusmod dolore nisi aliqua. Non officia in laboris dolore qui consequat velit qui. Est veniam qui culpa minim duis. Reprehenderit sint eiusmod esse tempor pariatur non irure labore cillum.',
    },
  ]);
  
 const  [skills, setSkills] = useState([
   {
     name: 'HTML',
     level: 80, 
     years: 3,
   }, 
   {
     name: 'CSS',
     level: 70, 
     years: 3,
   },
   { 
     name: 'JavaScript',
     level: 60, 
     years: 3,
   },
   {
     name: 'React',
     level: 60, 
     years: 3,
   }
 ]);

  return (
    <>
      <Header />
      <main className='main'>
     <article className="info">
        <Accordion title={'Personal Info'}>
          <Personal state={state} setState={setState} />
        </Accordion>
        <Accordion title={'Education'}>
          <Education state={education} setState={setEducation} />
        </Accordion>
        <Accordion title={'Experience'}>
          <Experience state={experiencie} setState={setExperience} />
        </Accordion>
        <Accordion title={'Skills'}>
          <Skills skills={skills} setSkills={setSkills} />
        </Accordion>
    </article>
        <aside className='aside'>
        <CVPreview
          education={education}
          experience={experiencie}
          personal={state}
          skills={skills}
        />
          </aside>
      </main>
      <Footer />
    </>
  );
}

export default App;
