 const { MongoClient }  = require("mongodb");
 uri = 'mongodb://localhost:27017/allahabaddb';
 client = new MongoClient(uri);
// client.connect();



async function run() {
    try {
        await client.connect();
        await client.db('allahbaddb').command({ping: 1});
        console.log("Connected succefully to server");

    } finally {

        await client.close();

    }
}
run().catch(console.dir);