const productsList =(id) => {
    return[
    {id: 1, categoryId:'Zapatillas', img: 'https://i.ibb.co/fxqcbMM/Zapas-Kobe3.jpg', name: 'Zapatillas',price: 8000,stock: 81,marca: 'Nike',description: 'Zapatillas edición especial Kobe Bryant'},
    {id: 2, categoryId:'Camisetas', img: 'https://i.ibb.co/Zff8gLq/curry.jpg', name: 'Camisetas',price: 8000,stock: 81,marca: 'Nike',description: 'Camiseta Golden State Warriors Stephen Curry nº30'},
    {id: 3, categoryId:'Shorts', img: 'https://i.ibb.co/BLPLsfk/shortAS.jpg', name: 'Shorts',price: 8000,stock: 81,marca: 'Jordan',description: 'Short NBA edición especial All Star'},
    {id: 4, categoryId:'Camperas', img: 'https://i.ibb.co/YN8V3bB/camperakobe.jpg', name: 'Camperas',price: 8000,stock: 81,marca: 'Nike',description: 'Campera Lakers edición especial Campeones'},
    {id: 5, categoryId:'Pelotas', img: 'https://i.ibb.co/VmZw0vQ/pelota.webp', name: 'Pelotas',price: 8000,stock: 81,marca: 'Spalding',description: 'Pelota Oficial de la NBA'},
  ];
};

const productList = () => {
    return [
      {id: 1, categoryId:'Zapatillas', img: 'https://i.ibb.co/YN8V3bB/camperakobe.jpg', name: 'Zapatillas', }
    ];
  };

const productsPromise = new Promise((rej, res) => {
    setTimeout(() => {
      rej(productsList("1"));
    }, 2000);
  });
  
export const productPromise = new Promise((rej, res) => {
    setTimeout(() => {
      rej(productList());
    }, 2000);
  });

export default productsPromise;