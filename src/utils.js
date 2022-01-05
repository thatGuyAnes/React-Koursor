// Linear interpolation
const lerp = (x, y, n) => (1 - n) * x + n * y;

// Gets the mouse position
const getMousePos = (mouseEvent) => {
    let posx = 0;
    let posy = 0;
    if (!mouseEvent) mouseEvent = window.event;
    if (mouseEvent.pageX || mouseEvent.pageY) {
        posx = mouseEvent.pageX;
        posy = mouseEvent.pageY;
    }
    else if (mouseEvent.clientX || mouseEvent.clientY)    {
        posx = mouseEvent.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        posy = mouseEvent.clientY + body.scrollTop + document.documentElement.scrollTop;
    }

    return { x : posx, y : posy }
};

export { lerp, getMousePos };
