// Author: Neelansh Gulati
const mongoose=require('mongoose');
const db_link='mongodb+srv://root:root@cluster0.lzoio08.mongodb.net/?retryWrites=true&w=majority';

// code reference: https://daily.dev/blog/the-4-creational-design-patterns-in-node-js-you-should-know 
let connection=mongoose.connect(db_link).then((db)=>{
    console.log('db connection successfull!')
}).catch((err)=>{
    console.log(err)
});

// singleton design pattern used here
class DBConnection {
    constructor() {
      throw new Error('Use the getInstance() method on the Singleton object!');
    }
  
    getInstance() {
      if (!DBConnection.instance) {
        DBConnection.instance = connection;
      }
  
      return DBConnection.instance;
    }
  }
  
module.exports=DBConnection;
