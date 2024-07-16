const createUser = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve({});
    } catch (err) {
      reject(err);
    }
  });
};

export default { createUser };
