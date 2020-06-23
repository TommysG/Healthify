export function Auth(userData) {
  let authUrl = "http://83.212.77.220:3100/api/validate";

  return new Promise((resolve, reject) => {
    fetch(authUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((r) =>
        r.json().then((data) => resolve({ status: r.status, body: data }))
      )
      .catch((err) => {
        reject(err);
      });
  });
}
