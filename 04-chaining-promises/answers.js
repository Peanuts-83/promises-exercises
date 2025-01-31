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
      .then(/* IMPLEMENT ME! */
        (data) => {
          resolve(asyncTransformer(data));
        }
      )
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
  return firstPromise
    .then(/* IMPLEMENT ME! */
      (data) => {
        return new Promise((resolve) => {
          resolve (slowAsyncProcess(data));
        });
      }
    );
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
    /* IMPLEMENT ME! */
    return getUserById(userId)
      .catch((error) => {
        throw(error);
      })
      .then((user) => {
        return getOrganizationById(user['organizationId'])
          .then((organization) => {
            user['organization'] = organization;
            return user;
          });
      })
      .catch((error) => {
        Promise.resolve(error);
      });
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};