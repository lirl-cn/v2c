const isEmpty = (target, emptyStringIsEmpty = true) => {
  if (emptyStringIsEmpty && typeof target === "string" && target.trim() === "" || target === void 0 || target === null) {
    return true;
  } else {
    return false;
  }
};
export {
  isEmpty
};
