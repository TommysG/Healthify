export function Auth(userData) {
  let authUrl = "http://localhost:3100/api/validate";

  return new Promise((resolve, reject) => {
    fetch(authUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
