/**
 * Dependency Inversion Principle
 * @description Objects shouldn't depend on other objects. They should depend on abstractions for implementing them
 * @example Employee class that contains the adjustSalary method
 **/

// ============> Without the Dependency Inversion Principle
class Employee {
	private salary: number;
	
	// adjust the salary
	public adjustSalary(): void {
		// The problem here is that adjustSalary will have always the same logic for every class that extends Employee
	}
}

// Both Dev and Manager will have the same implementation for the adjustSalary method
class Dev extends Employee { }
class Manager extends Employee { }




// ============> Implementing the Dependency Inversion Principle
interface IEmployee {
	adjustSalary(): void;
}

class Dev implements IEmployee {
	adjustSalary(): void {
		// logic for Dev
	}
}

class Manager implements IEmployee {
	adjustSalary(): void {
		// logic for Manager
	}
}

class Employee {
	constructor(private employee: IEmployee) { }

	adjustSalary(): void {
		this.adjustSalary();
	}
}

// now we can have multiple employees with different adjustSalary implementations
const devEmployee = new Employee(new Dev());
const managerEmployee = new Employee(new Manager());