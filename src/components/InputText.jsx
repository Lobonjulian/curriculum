export default function InputText({
  feature,
  label,
  type = 'text',
  index,
  state,
  setState,
}) {
  return (
    <div className="flex-col">
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
    <div className="flex-col">
      <label>{label}</label>
      <textarea
        className="textarea"
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
