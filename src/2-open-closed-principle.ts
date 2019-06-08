// A software artifact should be open for extension but closed for modification


// Items for a purchase can be extensible now
interface IItem {
	price: number,
	quantity: number
}

// A purchase object can be extensible and use other interfaces
interface IPurchase {
	items: [IItem]
	total: number
}

class Purchase {
	getPurchase(id: number): IPurchase {
		const items: [IItem] = [
			{ price: 10, quantity: 1 },
			{ price: 15, quantity: 2 }
		];
		const total: number = this.getTotal(items);

		return {
			items,
			total
		};
	}

	getTotal(items: [IItem]): number {
		return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
	}

	createPurchase(data: IPurchase) {
		console.log(data.items);
		console.log(data.total);
	}
}