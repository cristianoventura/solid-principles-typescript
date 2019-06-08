// A software artifact should be open for extension but closed for modification


class Purchase {
	getPurchase(id: number): object {
		const items = [
			{ price: 10, quantity: 1 },
			{ price: 15, quantity: 2 }
		];

		const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

		return {
			items,
			total
		}
	}

	createPurchase(data: object) {
		console.log(data['items']);
		console.log(data['total']);
	}
}
