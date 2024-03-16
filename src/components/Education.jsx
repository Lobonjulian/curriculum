import InputText, { TextArea } from './InputText';
import Buttons, { DeleteButton } from './Buttons';

export default function Education({ state, setState }) {
  return (
    <section>
      <h2>Education </h2>
      <div>
        {state.map((item, index) => {
          return (
            <div key={index}>
              <InputText
                index={index}
                feature={'school'}
                label={'School'}
                state={state}
                setState={setState}
              />
              <InputText
                index={index}
                feature={'degree'}
                label={'Degree'}
                state={state}
                setState={setState}
              />
              <InputText
                index={index}
                feature={'startDate'}
                label={'Start Date'}
                type={'date'}
                state={state}
                setState={setState}
              />
              <InputText
                index={index}
                feature={'endDate'}
                label={'end Date'}
                type={'date'}
                state={state}
                setState={setState}
              />

              <TextArea
                index={index}
                feature={'description'}
                label={'Description'}
                state={state}
                setState={setState}
              />
              <DeleteButton index={index} state={state} setState={setState} />
            </div>
          );
        })}
      </div>
      <Buttons handleClick={() => {
        const newValue = [...state];
        newValue.push({
          school: '',
          degree: '',
          startDate: '',
          endDate: '',
          description: '',
        })
        setState(newValue);
      }} />
    </section>
  );
}
