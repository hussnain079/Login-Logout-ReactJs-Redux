export const loginUser = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "correct_login@example.com" && password === "C0rr3Ct_P@55w0rd") {
        resolve(true);
      } else {
        reject(false);
      }
    }, 1000);
  });
};
