import React, { useState } from 'react';

export default ({ children, sideBar }) => {
  const closeSideBar = 'sidebar-close';
  const openSideBar = 'sidebar-open';
  const sideBarStyle = sideBar === true ? openSideBar : closeSideBar;

  return <aside className={sideBarStyle}>{children}</aside>;
};
