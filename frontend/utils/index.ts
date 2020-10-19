export const listToMap = (arr: any, key = "_id") =>
  arr.reduce((acc: any, curr: any) => {
    acc[curr[key]] = curr;
    return acc;
  }, {});

//FIXME: any data types
