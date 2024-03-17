import Buttons, { DeleteButton } from "./Buttons";
import InputText from "./InputText";

export default function Skills({ skills, setSkills }) {
  return (
    <section className="flex-col">
  <div>  
  {skills.map((skill, index) => {
    return (
      <div key={index} className="flex-col">
        <InputText
          index={index}
          feature="name"
          label="skill "
          state={skills}
          setState={setSkills}
        />
        <InputText
          index={index}
          feature="level"
          label="level"
          type="range"
          state={skills}
          setState={setSkills}
        />
        <InputText 
          index={index}
          feature="years"
          label={"years of experience"}
          type="number"
          state={skills}
          setState={setSkills}
        />
        <DeleteButton index={index} state={skills} setState={setSkills}/>
      </div>
    )
  })}   
  <Buttons handleClick={() => setSkills([...skills, {}])}/>
    </div>
    </section>
  )
}
