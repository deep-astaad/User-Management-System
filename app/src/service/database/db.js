const mongoose = require('mongoose');


const Connection = async () => {
    const URL = 'mongodb://0.0.0.0:27017/users';
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected succesfully'); 
    } catch(error){
        console.log('Error while connecting to database');
    }
}

export { Connection };
// export default Connection;