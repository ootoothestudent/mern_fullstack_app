const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


const connectDB = async() => {
    try {
        await mongoose.connect( process.env.mongoURI || 
            db, {
                useNewUrlParser: true
            }
        );

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
if(process.env.NODE_ENV ==='production'){
    app.use(express.static('mern_a_to_z_client/build'))
}

module.exports = connectDB;