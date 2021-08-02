/* async function calculator(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('no sum');
    }
  });
}

module.exports = calculator;*/

async function calculator(a, b) {
  const suma = a + b;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(suma);
    }, 1000);
  });
}

module.exports = calculator;

/*
async function calculator(a, b) {
  const suma = a + b;

  return suma;
}

module.exports = calculator;*/
