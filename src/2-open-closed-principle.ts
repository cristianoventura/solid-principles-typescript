/**
 * Open-Closed Principle
 * @description A software artifact should be open for extension but closed for modification
 * @example A Purchase Class that contains a createdPurchase method and should handle two different logics depending on the selected credit card
 **/

 // ============> Without the Open-Closed Principle
class Purchase {
	createPurchaseWithMasterCard(): void {
		// Handle purchase with Master Card
	}

	createPurchaseWithVisa(): void {
		// Handle purchase with Visa
	}
}



// ============> Implementing the Open-Closed Principle
abstract class Purchase {
	abstract createPurchase(): void;
}

// Now the Purchase class can be extensible to multiple payment methods
// And those payment methods are extensible in their own class
class VisaPayment extends Purchase {
	createPurchase(): void {
		// do something
	}
}

class MasterCardPayment extends Purchase {
	createPurchase(): void {
		// do something
	}
}