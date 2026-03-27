const products = [
  { id: 1, name: 'Phone', price: 25000, category: 'Electronics' },
  { id: 2, name: 'Notebook', price: 60, category: 'Stationery' }
];

export const getAllProducts = () => products;

export const getProductById = (id) =>
  products.find((product) => product.id === id);

export const addProduct = ({ name, price, category }) => {
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price,
    category
  };

  products.push(newProduct);
  return newProduct;
};
