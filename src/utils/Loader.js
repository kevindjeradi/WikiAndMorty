import React from 'react';
import logo from '../assets/images/loader.webp';

const Loader = () => (
  <div className="flex justify-center items-center h-128">
    <img
      src={logo}
      alt="Loading..."
      className="w-72 h-72 object-contain"
    />
  </div>
);

export default React.memo(Loader);