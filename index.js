const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function run() {
    try{
      await client.connect();
      const db = client.db('Mallikadb');
      const collection = db.collection("students");

      //retrieve and display a single document
      const first = await collection.findOne();
      console.log("First document:", first);

      //retrieve and display all documents
      const allDocuments = await collection.find().toArray();
      console.log("All Documents:", allDocuments);
    }
    finally{
       await client.close();
    }
}
run().catch(console.error);