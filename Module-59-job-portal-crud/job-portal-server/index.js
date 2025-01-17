/* ----------- Import Module ----------- */
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

/* ----------- Cors ----------- */
app.use(cors());
app.use(express.json());
require('dotenv').config();


/* ---------------------------------------------- MongoDB ---------------------------------------------- */
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@my-mongodb.2rdes.mongodb.net/?retryWrites=true&w=majority&appName=My-MongoDB`;

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
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    /* ********************** --> Job Related API <-- ********************** */
    const database = client.db("job_portal");
    const jobsCollection = database.collection("jobs");
    const jobsApplicationCollection = database.collection("jobsApplication");

    //get jobs data 
    app.get('/jobs', async (req, res) => {
      const email = req.query.email;
      let query = {};
      if (email) {
        query = { hr_email: email };
      }

      const cursor = jobsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // get jobs id
    app.get(`/jobs/:id`, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);
      res.send(result);
    });

    // job application data 
    app.post(`/job-applications`, async (req, res) => {
      const application = req.body;
      const result = await jobsApplicationCollection.insertOne(application);

      // not the best way (use aggregate)
      const id = application.job_id;
      const query = { _id: new ObjectId(id) };
      const job = await jobsCollection.findOne(query);

      let newCount = 0;
      if (job.applicationCount) {
        newCount = job.applicationCount + 1;
      } else {
        newCount = 1;
      }

      //update the job info
      const filter = { _id: new ObjectId(id) };

      const updateDoc = {
        $set: {
          applicationCount: newCount,
        }
      }

      const updateResult = await jobsCollection.updateOne(filter, updateDoc);

      res.send(result);
    });

    // (one data, get some data, [0, 1, many])
    app.get(`/job-application`, async (req, res) => {
      const email = req.query.email;
      const query = { applicant_email: email };
      const result = await jobsApplicationCollection.find(query).toArray();

      // fokira way to aggregate
      for (const application of result) {
        // console.log(application.job_id);
        const query1 = { _id: new ObjectId(application.job_id) };
        const job = await jobsCollection.findOne(query1);
        if (job) {
          application.title = job.title;
          application.location = job.location;
          application.company = job.company;
          application.company_logo = job.company_logo;
        }
      }

      res.send(result);
    });
    // http://localhost:3000/job-application?email=testdev1234@google.com

    // send chunk of object to database
    app.post('/jobs', async (req, res) => {
      const formValue = req.body;
      const result = await jobsCollection.insertOne(formValue);
      res.send(result);
    });



  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

/* ----------------------------------------------------------------------------------------------------- */


/* ----------- Method ----------- */
app.get('/', (req, res) => {
  res.send({
    "jobServer": "Job server is running local 3000 port",
  });
});

app.listen(port, () => {
  console.log(`Server is connected successfully, port: ${port}`);
});