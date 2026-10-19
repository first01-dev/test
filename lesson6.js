const products = [
  { name: "Racket", price: 2500, inStock: true },
  { name: "Shoes", price: 1800, inStock: false },
  { name: "Bag", price: 900, inStock: true },
];

// 1. แสดงชื่อสินค้าทุกชิ้น
const productNames = products.map((product) => product.name);
console.log(productNames);

// 2. เลือกสินค้าที่มีราคาไม่เกิน 2000
const affordableProducts = products.filter((product) => product.price <= 2000);
console.log(affordableProducts);

// 3. ค้นหาสินค้าที่ชื่อ Racket
const racket = products.find((product) => product.name === "Racket");
console.log(racket);