import { useState, useEffect } from 'react';

const useScrollbarWidth = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState<number>(0);

  useEffect(() => {
    const getScrollbarWidth = () => {
      const scrollDiv = document.createElement('div');
      scrollDiv.style.width = '100px';
      scrollDiv.style.height = '100px';
      scrollDiv.style.overflow = 'scroll';
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px'; // Asegura que no sea visible

      document.body.appendChild(scrollDiv);
      const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return width;
    };

    setScrollbarWidth(getScrollbarWidth());
  }, []);

  return scrollbarWidth;
};

export default useScrollbarWidth;
