const mongoose = require('mongoose');


const connect = async( ) =>{
    try {
        await mongoose.connect(`${process.env.URL}`).then(()=> console.log("connect to the db")) ;
        
    } catch (error) {
        console.log(error);
        
    }
}

connect ();