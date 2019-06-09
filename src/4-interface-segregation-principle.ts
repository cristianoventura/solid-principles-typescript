/**
 * Interface Segregation Principle
 * @description Don't expose methods to your clients, methods that they don't use
 * @example An interface that should implement methods that cannot be used
 **/

 // ============> Without the Interface Segregation Principle
interface Animal {
	fly(): void;
	walk(): void;
	bark(): void;
	meow(): void;
}

// Implementing this interface will be weird, cause some methods are not consistents for some cases
class Dog implements Animal {
	fly(): void {
		// Dogs don't fly - this method should not be in the the Animal interface
	}

	walk(): void {
		// ok
   	}

    bark(): void {
	// ok
	}

	meow(): void {
		// ????
   	}
 }



// ============> Implementing the Interface Segregation Principle
// Separate methods in different interfaces that they belong
interface IDog {
	bark(): void;
}

interface ICat {
	meow(): void;
}

interface IBird {
	fly(): void;
}

interface IQuadrupeds {
	walk(): void;
}

// Now we are implementing only the interfaces and methods we need
class Dog implements IDog, IQuadrupeds {
	bard(): void {
		// ...
	}

	walk(): void {
		// ...
	}
}