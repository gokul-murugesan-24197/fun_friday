import React from 'react';
import template from '../image/Template.gif';
import './compound.css';

export const IndexPage = () => {
  return (
    <div>
      <img 
        src={template} 
        className="app-template" 
        alt="Fun Friday Template" 
      />
      {/* done */}
    </div>
  );
};
