export default function InputText({ feature, label, type = "text" , index, state, setState}) {
  return (
    <div>
      <label>{label}</label>
      <input
        id={feature}
        value={state[index][feature]}
        type={type}
        onChange={(e) => {
          const newValue = state.map((item, stateIndex) =>
            stateIndex === index ? { ...item, [feature]: e.target.value } : item
          );
          setState(newValue);
        }}
      />
    </div>
  );
}

export function TextArea({ label, index, state, setState, feature }) {
  return (
    <div>
      <label>{label}</label>
      <textarea
        id={feature}
        value={state[index][feature]}
        onChange={(e) => {
          const newValue = state.map((item, stateIndex) =>
            stateIndex === index ? { ...item, [feature]: e.target.value } : item
          );
          setState(newValue);
        }}
      />
    </div>
  );
}
