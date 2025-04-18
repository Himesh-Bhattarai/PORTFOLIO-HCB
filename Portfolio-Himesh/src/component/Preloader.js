import React, { useEffect, useState } from 'react';

const Preloader = ({ isLoading }) => {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      // Wait for the animation to complete before hiding the preloader
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Ensure this matches your animation duration

      return () => clearTimeout(timer);
    } else {
      setIsVisible(true); // Show preloader if loading
    }
  }, [isLoading]);

  return isVisible ? (
    <div className={`preloader ${isLoading ? '' : 'loaded'}`} id="preloader">
      <div className="line"></div>
    </div>
  ) : null;
};

export default Preloader;


