
const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URL = process.env.MONGODB_URL;
const mongooseURI = MONGODB_URL;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongooseURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

        global.food_items = fetched_data;
        global.foodCategory = foodCategory;

        // console.log("Fetched data:", fetched_data);
        // console.log("Fetched categories:", foodCategory);

    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = mongoDB;
