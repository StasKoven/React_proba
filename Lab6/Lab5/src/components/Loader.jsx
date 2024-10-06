import React from 'react';

const Loader = ({ isLoading, children }) => {
  return (
    <>
      {isLoading && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}
      {children}
    </>
  );
};

export default Loader