import React, { useEffect, useRef } from 'react';

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function SlideInAnimation() {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    function handleScroll() {
      if (isElementInViewport(element)) {
        element.classList.add('slide-in');
      } else {
        element.classList.remove('slide-in');
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} className="animate-slide-in">
      <h1>Slide-in Animation on Scroll</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in risus magna. Sed malesuada augue vel quam tincidunt sodales.
      </p>
    </div>
  );
}

export default SlideInAnimation;
