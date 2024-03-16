import { MdAutoDelete, MdOutlineAddToPhotos } from "react-icons/md";

export default function Buttons({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick}> <MdOutlineAddToPhotos /> Add </button>
    </div>
  )
}

export function DeleteButton({ index, state, setState }) {
  const handleClear = (index) => {
    const newValue = [...state];
    newValue.splice(index, 1);
    setState(newValue);
  }

  return (
    <div>
      <button onClick={() => handleClear(index)}> <MdAutoDelete /> Delete </button>
    </div>
  )
}