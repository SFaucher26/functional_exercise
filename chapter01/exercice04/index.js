export function addWithCallback(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 1000);
}

export function filterArrayWithCallback(array, filterFunc, callback) {
  setTimeout(() => {
    let res = array.filter(filterFunc);
   callback(res);
  }, 1000);
}


export async function asyncAdd(a, b) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = a + b;
          resolve(result);
      }, 1000);
  });
}

export async function filterArrayAsync(array, filterFunc) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    
      let result = array.filter(filterFunc);
      resolve(result);
    }, 1000);
  });
}

