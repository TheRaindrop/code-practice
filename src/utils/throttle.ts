function debounce(
  fn: () => void,
  time: number,
  params?: {
    leading?: boolean;
    trailing?: boolean;
  }
) {
  const { leading = false, trailing = true } = params || {};
  let lastTriggered = 0;

  return function (...args) {
    if (!leading && !trailing) {
      return;
    }
    const current = Date.now();

    if (lastTriggered && current - lastTriggered >= time) {
      if (trailing) {
        fn.apply(this, args);
      }
      lastTriggered = Date.now();
    }

    if (lastTriggered === 0) {
      if (leading) {
        fn.apply(this, args);
      }
      lastTriggered = current;
    }
  };
}

function throttle(fn) {
  const lastTrigger = 0;
  return function () {};
}
