/* ----------- Import Module ----------- */
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');

/* ---------------------- Cors ---------------------- */
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://job-portal-practice-project.surge.sh',
  ],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
require('dotenv').config();
var jwt = require('jsonwebtoken');

const logger = (req, res, next) => {
  next();
};
const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;

  if (!token) {
    return res.status(401).send({ message: 'Unauthorized access' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized access' });
    }
    req.user = decoded;
    next();
  });
};
/* -------------------------------------------------- */


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
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");

    /* ********************** --> Job Related API <-- ********************** */
    const database = client.db("job_portal");
    const jobsCollection = database.collection("jobs");
    const jobsApplicationCollection = database.collection("jobsApplication");

    // ** auth related apis ** //
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10h' });
      res.cookie('token', token, {
        httpOnly: true,
        // secure: false, //for production set true 
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      });
      res.send({ success: true });
    });

    //------> get jobs data <------
    app.get('/jobs', logger, async (req, res) => {
      const email = req.query?.email;
      let query = {};
      if (email) {
        query = { hr_email: email };
      }

      const cursor = jobsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // ------> get jobs id <------
    app.get(`/jobs/:id`, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);
      res.send(result);
    });

    // ------> job application data <------
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
      };

      const updateResult = await jobsCollection.updateOne(filter, updateDoc);

      res.send(result);
    });

    // ------> get a specific job application by id  <------
    app.get('/job-applications/jobs/:job_id', async (req, res) => {
      const jobId = req.params.job_id;
      const query = { job_id: jobId };
      const result = await jobsApplicationCollection.find(query).toArray();
      res.send(result);
    });

    // ------> (one data, get some data, [0, 1, many]) <------
    app.get(`/job-application`, verifyToken, async (req, res) => {
      const email = req.query?.email;
      const query = { applicant_email: email };

      if (req.user?.email !== req.query?.email) {
        return res.status(403).send({ message: 'Forbidden access' });
      }

      const result = await jobsApplicationCollection.find(query).toArray();

      // console.log('cookies token', req.cookies);

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
    });// https://job-portal-server-sepia-tau.vercel.app/job-application?email=testdev1234@google.com

    // ------> send chunk of object to database <------
    app.post('/jobs', async (req, res) => {
      const formValue = req.body;
      const result = await jobsCollection.insertOne(formValue);
      res.send(result);
    });

    // ------> patch some specific id  <------
    app.patch(`/job-applications/:id`, async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          status: data.status,
        }
      };
      const result = await jobsApplicationCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    // logout
    app.post('/logout', (req, res) => {
      res.clearCookie('token', {
        httpOnly: true,
        // secure: false
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      });
      res.send({ success: true });
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