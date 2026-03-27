import express from 'express';

const app = express();
const PORT = 3002;

let products = [
  { id: 1, name: 'Laptop', price: 65000 },
  { id: 2, name: 'Mouse', price: 1200 }
];

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Product API! Use /products endpoint' });
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || typeof price !== 'number') {
    return res.status(400).json({ message: 'name and numeric price are required' });
  }

  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price
  };

  products.push(newProduct);
  return res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
  const productId = Number(req.params.id);
  const { name, price } = req.body;

  const productIndex = products.findIndex((product) => product.id === productId);
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  if (!name || typeof price !== 'number') {
    return res.status(400).json({ message: 'name and numeric price are required' });
  }

  products[productIndex] = { id: productId, name, price };
  return res.json(products[productIndex]);
});

app.delete('/products/:id', (req, res) => {
  const productId = Number(req.params.id);
  const exists = products.some((product) => product.id === productId);

  if (!exists) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products = products.filter((product) => product.id !== productId);
  return res.json({ message: 'Product deleted' });
});

app.listen(PORT, () => {
  console.log(`Product API running on http://localhost:${PORT}`);
});
