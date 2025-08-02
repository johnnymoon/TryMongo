
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://johnyisa55:o9rYjkOBBYAStQx1@cluster0.wt56q3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });


        // Make the appropriate DB calls
        await listDatabases(client);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
var strValue, strValue2,strValue3;

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    strValue= databasesList.databases[0].name;
        strValue2= databasesList.databases[1].name;
            strValue3= databasesList.databases[2].name;

};

app.get("/", (req, res) => {
    res.json({
        email: "aliogochukwu06@gmail.com",
        current_datetime: new Date().toISOString(),
        githuh_url: "https://github.com/Ali-Peter/user-api",
        test1: strValue,
         test2: strValue2,
          test3: strValue3
    })
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
      console.log(`Server running on port ${PORT}`)
})