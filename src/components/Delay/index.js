import React from 'react';

import './style.css';

const Cursor = () => {
  const delay = 9;

  const cursorVisible = React.useRef(true);
  const cursorEnlarged = React.useRef(false); // Will be helpful later ;)

  // Position of mouse.
  const mouseX = React.useRef(window.innerWidth / 2);
  const mouseY = React.useRef(window.innerHeight / 2);

  // Position of cursor outline.
  const cursorX = React.useRef(0);
  const cursorY = React.useRef(0);

  const requestRef = React.useRef(null);
  const outline = React.useRef(null);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      outline.current.style.opacity = 1;
    } else {
      outline.current.style.opacity = 0;
    }
  };

  const mouseMoveEvt = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    mouseX.current = e.pageX;
    mouseY.current = e.pageY;
  };

  const animateOutline = () => {
    console.log('animate')
    cursorX.current += (mouseX.current - cursorX.current) / delay;
    cursorY.current += (mouseY.current - cursorY.current) / delay;

    outline.current.style.top = `${cursorY.current}px`;
    outline.current.style.left = `${cursorX.current}px`;

      requestRef.current = requestAnimationFrame(animateOutline);
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', mouseMoveEvt);
    animateOutline();
    return () => {
      document.removeEventListener('mousemove', mouseMoveEvt);
      cancelAnimationFrame(requestRef.current);
    }
  }, [])
  return (
    <>
      <div className="cursor-outline" ref={outline}></div>
    </>
  )
};

export default Cursor;
