import React from 'react';

const Ribbon = (): JSX.Element => {
  return (
    <div>
      <div className="absolute top-0 right-0 overflow-hidden">
        <div
          className=" bg-yellow-500 origin-top float-right mt-9 mr-9 w-72 text-center"
          style={{ transform: 'translateX(50%) rotate(45deg)' }}
        >
          <div className="">Hi!</div>
          <div className="">I am nice ribbon</div>
          <div className="">That sits in a corner. </div>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
