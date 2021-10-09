/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((data) => {
        resolve(asyncTransformer(data));
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise.then((data) => {
    return new Promise((res, rej) => {
      slowAsyncProcess(data)
        .then((value) => { res(value); })
        .catch((error) => { rej(error); });
    })
  });
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    return getUserById(userId)
      .then((data) => {
        return new Promise((resolve, reject) => {
          let orgId = data['organizationId'];
          getOrganizationById(orgId)
            .then((organization) => {
              data['organization'] = organization;
              resolve(data);
            })
            .catch(() => reject());
        });
      })
      .catch((error) => { Promise.reject(error); });
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};