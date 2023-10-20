"use client"

import React, { useEffect, useState } from 'react';


function ContractOption(props){
  const { name, lang, gkey, onClick } = props; 
  
  const handleClick = () => {
    // Call the onClick callback with the ID when the child element is clicked
    onClick(name, gkey);
  };
    

  return (
    <div className="option Navbar_nav-links___WM6Q" onClick={handleClick}> 
        <h4>{name}</h4>
    </div>
  );
};

export default ContractOption;
