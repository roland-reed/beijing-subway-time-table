function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}

export function animate(duration: number, cb: (progress: number) => void) {
  const start = Date.now();

  function callback() {
    const now = Date.now();
    if (now - start > duration) {
      cb(1);
      return;
    }
    cb(easeOutCubic((now - start) / duration));
    requestAnimationFrame(callback);
  }

  requestAnimationFrame(callback);
}

export function smoothScroll(element: HTMLElement, duration: number, x: number, y: number): void {
  if ('scrollBehavior' in document.documentElement.style) {
    element.scrollTo({
      left: x,
      top: y,
      behavior: 'smooth',
    });
  } else {
    const startLeft = element.scrollLeft;
    const startTop = element.scrollTop;

    animate(duration, (progress) => {
      const left = (x - startLeft) * progress + startLeft;
      const top = (y - startTop) * progress + startTop;
      element.scrollTo(left, top);
    });
  }
}
