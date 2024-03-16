import InputText, { TextArea } from './InputText';

export default function Personal({ state, setState }) {
  return (
    <div>
      <h2>Info Personal</h2>
      <form className="form flex-col">
      <InputText
        index={0}
        feature={'firstName'}
        label={'First Name'}
        state={state}
        setState={setState}
      />
      <InputText
        index={0}
        feature={'lastName'}
        label={'Last Name'}
        state={state}
        setState={setState}
      />
      <InputText
        index={0}
        feature={'jobPosition'}
        label={'Job Position'}
        state={state}
        setState={setState}
      />
      <InputText
        index={0}
        feature={'email'}
        label={'Email'}
        type="email"
        state={state}
        setState={setState}
      />
      <InputText
        index={0}
        feature={'phone'}
        label={'Phone'}
        type="phone"
        state={state}
        setState={setState}
      />
      <InputText
        index={0}
        feature={'address'}
        label={'Address'}
        state={state}
        setState={setState}
      />
      <TextArea
        index={0}
        feature={'bio'}
        label={'Bio'}
        state={state}
        setState={setState}
      />
      </form>
    </div>
  );
}
