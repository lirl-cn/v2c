"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const isEmpty = (target, emptyStringIsEmpty = true) => {
  if (emptyStringIsEmpty && typeof target === "string" && target.trim() === "" || target === void 0 || target === null) {
    return true;
  } else {
    return false;
  }
};
exports.isEmpty = isEmpty;
