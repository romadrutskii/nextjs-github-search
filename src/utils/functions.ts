export function debounce<F extends Function>(
  func: F,
  ms: number,
  immediate = false
) {
  let timeout: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any) {
    if (immediate && !timeout) {
      func.apply(this, args);
    }

    clearTimeout(timeout); // остановить таймер
    timeout = setTimeout(() => {
      // и запустить заново
      //timeout = null;
      clearTimeout(timeout);
      if (!immediate) {
        func.apply(this, args);
      }
    }, ms);
  };
}
