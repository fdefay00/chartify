import React, { useState } from 'react';

export default ({ children, sideBar }) => {
  const closeSideBar = { width: 0, border: 0 };
  const openSideBar = { width: '50%' };
  const sideBarStyle = sideBar === true ? openSideBar : closeSideBar;

  return <aside style={sideBarStyle}>{children}</aside>;
};
