import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ken',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id:'1',
      name: 'Green Long Dress',
      slug: 'green-long-dress',
      category: 'Dress',
      image: ' /images/dress1.png',
      price: 2000,
      countInStock: 5,
      brand: 'H&M',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality dress',
    },
    {
      // _id:'2',
      name: 'Black Long Dress',
      slug: 'black-long-dress',
      category: 'Dress',
      image: '/images/dress2.png',
      price: 2000,
      countInStock: 5,
      brand: 'H&M',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality dress',
    },
  ],
};
export default data;
