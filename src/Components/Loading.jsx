import React from 'react';

const Loading = () => {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <div className='mx-auto'>
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-sm"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </div>
    );
};

export default Loading;