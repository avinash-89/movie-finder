export function hasNullOrUndefined(obj) {
  return Object.values(obj).some(
    (val) => val === null || val === "" || val === undefined
  );
}

export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export function checkNested(obj, value) {
  let hasValue = false;

  function search(obj, value) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        search(obj[key], value);
      } else if (obj[key] === value) {
        hasValue = true;
      }
    }
  }

  search(obj, value);

  return hasValue;
}
