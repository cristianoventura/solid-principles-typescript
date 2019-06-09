/**
 * Single Responsibility Principle
 * @description A class or function should only have one reason to change
 * @example A User Class that contains a method that allows to query users by User Type.
 **/ 


// ============> Without the Single Responsibility Principle
class User {

	// this is not a good way to implement the "find" method
	// if a new userType comes up at some point, a new "if" statement
	// will be added and this will be a long and complex method
	public find(userType: string): Promise<any> {
		return new Promise((resolve, reject) => {
			if (userType === 'Admin') {
				// ...
			} else if (userType === 'Editor') {
				// ...
			}
		});
	}

	public save(): Promise<any> {
		return new Promise((resolve, reject) => {
			// do something
		});
	}
} 



// ============> Implementing the Single Responsibility Principle
// This will be a Super Class and each User Type will have their own "find" method
abstract class User {

	// this must be implemented by children classes
	abstract find(): Promise<any>;

	// method in common across all user types
	// this could be here, potentially
	protected save(): Promise<any> {
		return new Promise((resolve, reject) => {
			// do something
		});
	}
}

// This is independent of any other user type
class Admin extends User {
	// implements the find method
	find(): Promise<any> {
		return new Promise((resolve, reject) => {
			// do something
		});
	}
}

// This is independent of any other user type
class Editor extends User {
	// implements the find method
	find(): Promise<any> {
		return new Promise((resolve, reject) => {
			// do something
		});
	}
}