/**
 *  * We use this function to randomize coordinates
 */

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;
