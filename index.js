console.log('hello');

export const sum = (a, b) => {
  return a + b;
};

export const checkCat = (value) => {
  let result = false;
  result = value.includes('猫');
  result = value.includes('ねこ');
  result = value.includes('ネコ');
  result = value.includes('cat');
};
