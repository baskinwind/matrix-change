export function getRandom(min: number, max: number): number {
  return Math.round(Math.random() * (max - min)) + min;
}

export function getRandomStr(num: number): string {
  let str = '';
  let arr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < num; i++) {
    str += arr[getRandom(0, arr.length)];
  }
  return str;
}
