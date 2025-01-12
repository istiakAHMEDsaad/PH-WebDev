/* ----------- Import Module ----------- */
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

/* ----------- Cors ----------- */
app.use(cors());
app.use(express.json());


/* ----------- Method ----------- */
app.get('/', (req, res) => {
    res.send({
        "jobServer": "Job server is running local 3000 port",
    })
})

app.listen(port, ()=>{
    console.log(`Server is connected successfully, port: ${port}`);
})