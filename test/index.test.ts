import Product from '../domain/Product';
import Cart from '../service/Cart';

test ('new card should be empty 1', () => {
    const cart = new Cart();
    const sampleMovie = new Product('Мстители', 50, 20, 125);
    const sampleMovie1 = new Product('Комната страха', 100, 20 , 126);
    const sampleMovie2 = new Product('Крик', 150, 20 , 127);

cart.add(sampleMovie);
cart.add(sampleMovie1);
cart.add(sampleMovie2);

expect(cart.totalCost()).toBe(300);
});

test ('new card should be empty 2', () => {
    const cart = new Cart();
    const sampleMovie = new Product('Мстители', 50, 20, 125);
    const sampleMovie1 = new Product('Комната страха', 100, 20 , 126);
    const sampleMovie2 = new Product('Крик', 150, 20 , 127);

    cart.add(sampleMovie);
    cart.add(sampleMovie1);
    cart.add(sampleMovie2);

    expect(cart.totalCostSale(20)).toBe(240);
});

test ('new card should be empty 3', () => {
    const cart = new Cart();
    const sampleMovie = new Product('Мстители', 50, 20, 125);
    const sampleMovie1 = new Product('Комната страха', 100, 20 , 126);
    const sampleMovie2 = new Product('Крик', 150, 20 , 127);

    cart.add(sampleMovie);
    cart.add(sampleMovie1);
    cart.add(sampleMovie2);
    cart.removeProduct(125);

    expect(cart.totalCost()).toBe(250);
});

test ('new card should be empty 4', () => {
    const cart = new Cart();
    const sampleMovie = new Product('Мстители', 50, 20, 125);
    const sampleMovie1 = new Product('Комната страха', 100, 20 , 126);
    const sampleMovie2 = new Product('Крик', 150, 20 , 127);

    cart.add(sampleMovie);
    cart.add(sampleMovie1);
    cart.add(sampleMovie2);
    cart.removeProduct(125);

    expect(cart.totalCostSale(20)).toBe(200);
});


test ('new card should be empty 5', () => {
    const cart = new Cart();
    const sampleMovie = new Product('Мстители', 50, 20, 125);

    cart.add(sampleMovie);
    expect(cart.items).toMatchObject([{name: 'Мстители', cost: 50, sale: 20, id : 125}]);
});
