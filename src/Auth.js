import { Base64 } from "js-base64";

class Auth {
	constructor() {
		this.authenticated = false;
	}

	login(email, password) {
		fetch("http://localhost:3100/api/validate", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				accept: "application/json",
			},
			body: JSON.stringify({
				email: email,
				pwd: Base64.encode(password),
			}),
		})
			.then((response) => {
				if (response.status === 200) {
					//Log user in
					this.authenticated = true;
				} else if (response.status === 403) {
					//Show wrong password error
					this.authenticated = false;
				} else {
					//User does not exist / wrong email
					this.authenticated = false;
				}
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	logout() {
		this.authenticated = false;
	}

	isAuthenticated() {
		return this.authenticated;
	}
}

export default new Auth();
