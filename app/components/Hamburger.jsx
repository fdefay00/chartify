import React, { useState } from 'react';

export default ({ toggleSideBar }) => {
  return (
    <div className="end" onClick={toggleSideBar}>
      <svg width="80" height="80">
        <path d="M0, 25 80, 25" stroke="#fff" strokeWidth="5" />
        <path d="M0, 44 80, 44" stroke="#fff" strokeWidth="5" />
        <path d="M0, 63 80, 63" stroke="#fff" strokeWidth="5" />
      </svg>
    </div>
  );
};
