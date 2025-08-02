
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://johnyisa55:o9rYjkOBBYAStQx1@cluster0.wt56q3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//const uri = process.env.MONGODB_URI;

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3060;

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
var strValue="This is a string value";
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

        // Make the appropriate DB calls
     //   await listDatabases(client);
     strValue="Pinged your deployment. You successfully connected to MongoDB!";
 //   console.log(strValue);


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//run().catch(console.dir);
run().catch();


app.get("/", (req, res) => {

    
    res.json({
        email: "aliogochukwu06@gmail.com",
       current_datetime: new Date().toISOString(),
       githuh_url: "https://github.com/Ali-Peter/user-api",
       test1: strValue

    })

})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

})