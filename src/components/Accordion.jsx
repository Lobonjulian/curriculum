import { useState } from 'react';
import { FiChevronsDown, FiChevronsUp } from 'react-icons/fi';

export default function Accordion({ title, children }) {
  const [showState, setShowState] = useState(false);

  const handleToggleShow = () => {
    setShowState(!showState);
  };

  return (
    <div className="m-top">
      <h3 className="accordion-title" onClick={handleToggleShow}>
        {showState ? <FiChevronsDown /> : <FiChevronsUp/>}
         {''} {title}
      </h3>
      {showState && children}
    </div>
  );
}
