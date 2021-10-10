/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
    promise
      .then((result) => {
        resolve(transformer(result));
      })
      .catch((error) => reject(error));
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise
    .then((data) => {
      return new Promise((resolve, reject) => {
        if (typeof data === 'number') {
          resolve(Math.pow(data, 2));
        } else if (!isNaN(data)) {
          resolve(Math.pow(+data, 2));
        } else {
          reject(`Cannot convert '${data}' to a number!`);
        }
      });
    })
    .catch((error) => Promise.reject(error));

}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise)
    .catch(() => Promise.resolve(0));
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(
    /* IMPLEMENT ME */
    (success) => {
      throw (success);
    },
    (error) => {
      return (error);
    }
  );
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};