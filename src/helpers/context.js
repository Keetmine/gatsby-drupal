import React from 'react';

export const showPopup = {
  show: true,
  hide: false,
};
export const PopupContext = React.createContext(showPopup.show);
