// A class or function should only have one reason to change.

class User {;

	public findAdmins(): Promise<any> {
		return new Promise((resolve, reject) => {
			// query the database looking for admins
		});
	}

	public findEditors(): Promise<any> {
		return new Promise((resolve, reject) => {
			// query the database looking for editors
		});
	}

	public save(): Promise<any> {
		return new Promise((resolve, reject) => {
			// do something
		});
	}
}