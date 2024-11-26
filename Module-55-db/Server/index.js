const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


//saadAhmed
/* ================================================ Mongo DB ================================================ */
const uri = "mongodb+srv://saadAhmed:urVOHnwEHEDyZ4Jl@my-mongodb.2rdes.mongodb.net/?retryWrites=true&w=majority&appName=My-MongoDB";

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

    // Create Database
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("userDB");
    const usersCollection = database.collection("users");

    app.get('/users', async(req, res)=>{
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.post('/users', async(req, res) => {
      const user = req.body;
      console.log(`${user}`);
      const result =await usersCollection.insertOne(user);
      res.send(result);
    });


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
/* ========================================================================================================== */


// basic gate
app.get('/', (req, res) => {
  res.send(`Server is Running`);
});

app.listen(port, () => {
  console.log(`crud database server runnig on port ${port}`);
})


/* const run = async() => {

}
run().catch(err => console.error(err));

try {
    
} catch (error) {
    
}
finally{
}
*/