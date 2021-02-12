const productsList =(id) => {
    return[
    {id: 1, img: 'https://i.ibb.co/YN8V3bB/camperakobe.jpg', name: 'Zapatillas',price: 8000,stock: 81,marca: 'Nike',description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique expedita temporibus minima ipsa quisquam totam, facere a, illum architecto neque ex recusandae quibusdam soluta porro Est officia laudantium ducimus culpa'},
    {id: 2, img: 'https://i.ibb.co/YN8V3bB/camperakobe.jpg', name: 'Camisetas',price: 8000,stock: 81,marca: 'Nike',description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique expedita temporibus minima ipsa quisquam totam, facere a, illum architecto neque ex recusandae quibusdam soluta porro Est officia laudantium ducimus culpa'},
    {id: 3, img: 'https://i.ibb.co/YN8V3bB/camperakobe.jpg', name: 'Shorts',price: 8000,stock: 81,marca: 'Nike',description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique expedita temporibus minima ipsa quisquam totam, facere a, illum architecto neque ex recusandae quibusdam soluta porro Est officia laudantium ducimus culpa'},
    {id: 4, img: 'https://i.ibb.co/YN8V3bB/camperakobe.jpg', name: 'Camperas',price: 8000,stock: 81,marca: 'Nike',description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique expedita temporibus minima ipsa quisquam totam, facere a, illum architecto neque ex recusandae quibusdam soluta porro Est officia laudantium ducimus culpa'},
    {id: 5, img: 'https://i.ibb.co/YN8V3bB/camperakobe.jpg', name: 'Medias',price: 8000,stock: 81,marca: 'Nike',description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique expedita temporibus minima ipsa quisquam totam, facere a, illum architecto neque ex recusandae quibusdam soluta porro Est officia laudantium ducimus culpa'},
    {id: 6, img: 'https://i.ibb.co/YN8V3bB/camperakobe.jpg', name: 'Muñequeras',price: 8000,stock: 81,marca: 'Adidas',description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique expedita temporibus minima ipsa quisquam totam, facere a, illum architecto neque ex recusandae quibusdam soluta porro Est officia laudantium ducimus culpa'},
    {id: 7, img: 'https://i.ibb.co/YN8V3bB/camperakobe.jpg', name: 'Tobilleras',price: 8000,stock: 81,marca: 'Adidas',description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique expedita temporibus minima ipsa quisquam totam, facere a, illum architecto neque ex recusandae quibusdam soluta porro Est officia laudantium ducimus culpa'},
    {id: 8, img: 'https://i.ibb.co/YN8V3bB/camperakobe.jpg', name: 'Pelotas',price: 8000,stock: 81,marca: 'Spalding',description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique expedita temporibus minima ipsa quisquam totam, facere a, illum architecto neque ex recusandae quibusdam soluta porro Est officia laudantium ducimus culpa'},
  ];
};

const productList = () => {
    return [
      {id: 1,img: 'https://i.ibb.co/YN8V3bB/camperakobe.jpg', name: 'Zapatillas', }
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