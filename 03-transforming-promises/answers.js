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
      .catch((error) => { reject(error); });
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
    .then(/* IMPLEMENT ME! */
      (result) => {
        return new Promise((resolve, reject) => {
          if(typeof result === 'number' || !isNaN(result)) {
            resolve (Math.pow(+result, 2));
          } else {
            reject (`Cannot convert '${result}' to a number!`);
          }
        });

      }
    )
    .catch((error) => { throw (error); });

}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise)
    .catch(/* IMPLEMENT ME! */
      () => Promise.resolve(0));
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise
    .then(
      (result) => {
        throw result;
      },
      (error) => {
        return error;
      });
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