import mongoose from 'mongoose';
import connectToDatabase from './database.js';
import Product from './models/Product.js';

// Connect to the database
connectToDatabase();

// Define sample products
const sampleProducts = [
  {
    name: 'Diamond Ring 1',
    image: ['https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmluZ3xlbnwwfHwwfHx8MA%3D%3D'],
    category: 'Rings',
    material: 'Diamond',
    description: 'A stunning diamond ring.',
    size: 'Medium',
    color: 'Silver',
    reviews: [],
    rating: 4,
    numberOfReviews: 11,
    price: 1500,
    stock: 15,
    productIsNew: true,
  },
  {
    name: 'Gold Earrings 1',
    image: ['https://images.unsplash.com/photo-1590166223826-12dee1677420?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWFycmluZ3N8ZW58MHx8MHx8fDA%3D'],
    category: 'Earrings',
    material: 'Gold',
    description: 'Elegant gold earrings.',
    size: 'Small',
    color: 'Gold',
    reviews: [],
    rating: 0,
    numberOfReviews: 0,
    price: 1200,
    stock: 10,
    productIsNew: false,
  }
  
  // Add more products if needed
];

// Function to seed data
const seedData = async () => {
  try {
    await Product.deleteMany({}); // Clear existing products
    await Product.insertMany(sampleProducts); // Insert new sample products
    console.log('Sample products added to database');
    process.exit(); // Exit the script
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit with error
  }
};

seedData(); // Call the seedData function
