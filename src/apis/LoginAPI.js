export const loginUser = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "enterusername" && password === "password") {
        resolve(true);
      } else {
        reject(false);
      }
    }, 1000);
  });
};
