export const getRandom = (max: number, min: number = 0): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomStr = (num: number): string => {
  let str = "";
  let arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < num; i++) {
    str += arr[getRandom(arr.length - 1)];
  }
  return str;
};
