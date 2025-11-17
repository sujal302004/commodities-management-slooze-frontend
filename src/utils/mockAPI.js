// Mock data
let products = JSON.parse(localStorage.getItem('products')) || [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 999.99,
    quantity: 15,
    description: 'High-performance laptop'
  },
  {
    id: 2,
    name: 'T-Shirt',
    category: 'Clothing',
    price: 19.99,
    quantity: 50,
    description: 'Cotton t-shirt'
  },
  {
    id: 3,
    name: 'Coffee',
    category: 'Food',
    price: 12.99,
    quantity: 8,
    description: 'Premium coffee beans'
  }
];

// Save to localStorage
const saveProducts = () => {
  localStorage.setItem('products', JSON.stringify(products));
};

// Mock API functions
export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...products]);
    }, 500);
  });
};

export const getProduct = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id);
      resolve(product ? { ...product } : null);
    }, 500);
  });
};

export const createProduct = async (productData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newProduct = {
        ...productData,
        id: Math.max(...products.map(p => p.id), 0) + 1,
        price: parseFloat(productData.price),
        quantity: parseInt(productData.quantity)
      };
      products.push(newProduct);
      saveProducts();
      resolve(newProduct);
    }, 500);
  });
};

export const updateProduct = async (id, productData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = products.findIndex(p => p.id === id);
      if (index !== -1) {
        products[index] = {
          ...products[index],
          ...productData,
          price: parseFloat(productData.price),
          quantity: parseInt(productData.quantity)
        };
        saveProducts();
        resolve(products[index]);
      }
      resolve(null);
    }, 500);
  });
};

export const deleteProduct = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      products = products.filter(p => p.id !== id);
      saveProducts();
      resolve(true);
    }, 500);
  });
};