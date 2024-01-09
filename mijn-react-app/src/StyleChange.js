import React, { useState } from 'react';

const StyleChange = () => {
  const [isStyled, setIsStyled] = useState(false);

  const handleStyleChange = () => {
    setIsStyled(!isStyled);
  };

  return (
    <div>
      <button onClick={handleStyleChange}>Toggle Style</button>
      <p style={{ color: isStyled ? 'blue' : 'black', fontWeight: isStyled ? 'bold' : 'normal' }}>
        This is a dynamically styled paragraph.
      </p>
    </div>
  );
};

export default StyleChange;