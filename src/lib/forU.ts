export type ForUCallback = () => void

export const forU = (steps: number, fn: ForUCallback) => {
  for (let i = 0; i < 1; i+= 1/steps) 
};
