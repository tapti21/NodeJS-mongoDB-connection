const { MongoClient }  = require("mongodb");
uri = 'mongodb://localhost:27017/allahabaddb';
client = new MongoClient(uri);



async function run() {
    try {
        await client.connect();
        await client.db('allahbaddb').command({ping: 1});
        console.log("Connected succefully");
        collection = client.db("allahbaddb").collection("students")
        result = await collection.insertOne({
            name:"trapti",
            email:"trapti@gmail.com"
        })

    console.log('inserted succesfully')
    }
    finally {await client.close()}
}
run().catch(console.dir)