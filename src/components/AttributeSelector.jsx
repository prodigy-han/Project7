import React from 'react';

function AttributeSelector({ selectedAttributes, setAttributes }) {
  const attributes = ['brave', 'strong', 'intelligent', 'kind', 'funny'];

  const toggleAttribute = (attr) => {
    setAttributes((prev) => 
      prev.includes(attr) ? prev.filter(a => a !== attr) : [...prev, attr]
    );
  };

  return (
    <div>
      {attributes.map((attr) => (
        <button 
          key={attr} 
          onClick={() => toggleAttribute(attr)} 
          style={{
            backgroundColor: selectedAttributes.includes(attr) ? 'green' : 'gray',
            margin: '5px',
          }}
        >
          {attr}
        </button>
      ))}
    </div>
  );
}

export default AttributeSelector;