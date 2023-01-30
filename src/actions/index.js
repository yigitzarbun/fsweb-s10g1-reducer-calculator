export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const TOTAL_ADD_MEMORY = "TOTAL_ADD_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY, payload: 0 };
};

export const memoryPlus = () => {
  return { type: MEMORY_PLUS };
};

export const totalAddMemory = () => {
  return { type: TOTAL_ADD_MEMORY };
};

export const clearMemory = () => {
  return { type: CLEAR_MEMORY, payload: 0 };
};
