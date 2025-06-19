// src/products.js

import s25ultra from './assets/images/s25ultra.jpeg';
import iphone16 from './assets/images/16promax.jpeg';
import ps5 from './assets/images/ps5.jpeg';

const products = [
  {
    id: 1,
    title: "Samsung Galaxy S25 Ultra",
    price: 124999,
    image: s25ultra,
    description: "Samsung's flagship phone with advanced camera and display technology.",
  },
  {
    id: 2,
    title: "Apple iPhone 16 Pro Max",
    price: 129900,
    image: iphone16,
    description: "Apple's latest iPhone with powerful A18 chip and dynamic island.",
  },
  {
    id: 3,
    title: "Sony PlayStation 5",
    price: 54990,
    image: ps5,
    description: "Next-gen console by Sony with ultra-fast SSD and immersive graphics.",
  },
];

export default products;
