require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("Product Data import success.");
    process.exit();
  } catch (error) {
    console.error("Product Data import FAILED.");
    process.exit(1);
  }
};

importData();