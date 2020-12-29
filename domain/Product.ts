export default class Product {
    name: string;
    cost: number;
    sale: number;
    id: number;

    constructor(name: string, cost: number,  sale: number, id: number) {
        this.name = name;
        this.cost = cost;
        this.sale = sale;
        this.id = id;
    }
}
