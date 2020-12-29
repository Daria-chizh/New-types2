import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];

    }
    totalCost(): number {
        let total = 0;
        for (const item of this._items) {
            total = item.cost + total;
        }
        return total;
    }

    totalCostSale(discountPercent: number): number {
        let total = 0;
        for (const item of this._items) {
            const itemDiscount = (item.cost * discountPercent) / 100;
            total = total + item.cost - itemDiscount;
        }
        return total;
    }

    removeProduct(id: number): void {
        this._items = this._items.filter(item => item.id !== id)
    }
}
