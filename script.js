function convertObjToArr(obj) {
  let resultArr = [];
  for (let key in obj) {
    resultArr.push([key, obj]);
  }
  return resultArr;
} 