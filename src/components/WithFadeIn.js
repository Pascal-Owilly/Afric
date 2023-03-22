import React, { useEffect, useState } from 'react';

const FadeInWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    const target = document.querySelector('.fade-in');
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <div className={isVisible ? 'fade-in visible' : 'fade-in'}>
      {children}
    </div>
  );
};

export default FadeInWrapper;
