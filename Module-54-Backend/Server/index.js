const express = require('express');
const cors = require('cors');
const app = express();

// Hardcorded Port
// const port = 3000;

// If one port is using it set another dynamic port
const port = process.env.PORT || 3000;

// Using Middleware
app.use(cors());
app.use(express.json());


// Hardcorded Data
const user = [
    {
        id: 1,
        name: 'Jarina',
        email: 'jarina-morina@gmail.com',
    },
    {
        id: 2,
        name: 'telekus',
        email: 'telekus-telapoka@gmail.com',
    },
    {
        id: 3,
        name: 'budur',
        email: 'budur-udding@gmail.com',
    }
];

app.get('/', (req, res) => {
    res.send('My server is running 😀');
});

app.get('/user', (req, res) => {
    res.send(user);
});

app.post('/user', (req, res)=>{
    console.log(req.body);
    // console.log('post api hit man')
    const newUser = req.body;
    newUser.id = user.length + 1;
    user.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});