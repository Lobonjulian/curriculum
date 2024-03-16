import Buttons, { DeleteButton } from './Buttons';
import InputText, { TextArea } from './InputText';

export default function Experience({ state, setState }) {
  return (
    <section>
      <h2>Experience</h2>
      <div>
        {state.map((job, index) => {
          return (
            <div key={index}>
              <InputText
                index={index}
                feature="job"
                label="job"
                state={state}
                setState={setState}
              />
              <InputText
                index={index}
                feature="employer"
                label="employer"
                state={state}
                setState={setState}
              />
              <InputText
                index={index}
                feature="startDate"
                label="Start Date"
                type={'date'}
                state={state}
                setState={setState}
              />
              <InputText
                index={index}
                feature="endDate"
                label="endDate"
                type="date"
                state={state}
                setState={setState}
              />
              <TextArea
                index={index}
                feature="description"
                label="description"
                state={state}
                setState={setState}
              />
              <DeleteButton index={index} state={state} setState={setState} />
            </div>
          );
        })}

        <Buttons
          handleClick={() => {
            const newValue = [...state];
            newValue.push({
              job: '',
              employer: '',
              startDate: '',
              endDate: '',
              description: '',
            });
            setState(newValue);
          }}
        />
      </div>
    </section>
  );
}
