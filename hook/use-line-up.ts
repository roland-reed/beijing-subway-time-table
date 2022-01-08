import React from 'react';

interface LineUpOptions {
  ref: React.RefObject<HTMLDivElement>;
  lineUp: (div: HTMLDivElement) => void;
}

export function useLineUp(options: LineUpOptions) {
  const lineUp = React.useCallback(options.lineUp, [options.ref]);
  const context = React.useRef<{ timeoutId: null | NodeJS.Timeout; touching: boolean }>({
    timeoutId: null,
    touching: false,
  });
  const lazyLineUp = React.useCallback(() => {
    return setTimeout(() => {
      context.current.timeoutId && clearTimeout(context.current.timeoutId);
      context.current.timeoutId = null;
      options.ref.current && lineUp(options.ref.current);
    }, 200);
  }, [options.ref]);
  const onScroll: React.UIEventHandler<HTMLDivElement> = () => {
    const { timeoutId, touching } = context.current;

    timeoutId && clearTimeout(timeoutId);
    context.current.timeoutId = null;

    if (!touching) {
      context.current.timeoutId = lazyLineUp();
    }
  };
  const onTouchStart: React.UIEventHandler<HTMLDivElement> = () => {
    context.current.touching = true;
    const { timeoutId } = context.current;
    timeoutId && clearTimeout(timeoutId);
  };
  const onTouchEnd: React.UIEventHandler<HTMLDivElement> = () => {
    context.current.timeoutId = lazyLineUp();
    context.current.touching = false;
  };

  // React.useEffect(() => {
  //   const { timeoutId, touching } = context.current;

  //   timeoutId && clearTimeout(timeoutId);
  //   context.current.timeoutId = null;

  //   if (!touching) {
  //     context.current.timeoutId = lazyLineUp();
  //   }
  // });

  return {
    onTouchStart,
    onTouchEnd,
    onScroll,
  };
}
