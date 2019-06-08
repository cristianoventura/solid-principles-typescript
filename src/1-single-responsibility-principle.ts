// A class or function should only have one reason to change.

abstract class User {

	// this must be implemented by children classes
	abstract find(): Promise<any>;

	// method in common across all user types
	// this could be here potentially
	protected save(): Promise<any> {
		return new Promise((resolve, reject) => {
			// do something
		});
	}
}

class Admin extends User {
	// implements the find method
	find(): Promise<any> {
		return new Promise((resolve, reject) => {
			// do something
		});
	}
}

class Editor extends User {
	// implements the find method
	find(): Promise<any> {
		return new Promise((resolve, reject) => {
			// do something
		});
	}
}