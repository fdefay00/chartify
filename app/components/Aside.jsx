import React, { useState } from 'react';

export default ({ children, sideBar }) => {
  // const [sideBarStyle, setSideBarStyle] = useState({width : 0})
  // const openClass = 'end sidebar-open';
  // const closeClass = 'end sidebar-close';
  // const sideBarClass = sideBar === true ? openClass : closeClass;
  const closeSideBar = { width: 0, border: 0 };
  const openSideBar = { width: '50%' };
  const sideBarStyle = sideBar === true ? openSideBar : closeSideBar;
  // return <aside style={sideBarStyle} className={sideBarClass}>{children}</aside>;
  return <aside style={sideBarStyle}>{children}</aside>;
};
