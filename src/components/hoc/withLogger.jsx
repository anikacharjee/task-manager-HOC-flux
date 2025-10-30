import React, { useEffect } from 'react';

const withLogger = (WrappedComponent, componentName = 'Component') => {
  return function LoggerWrapper(props) {
    useEffect(() => {
      console.log(`[${componentName}] mounted`);
      return () => console.log(`[${componentName}] unmounted`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
