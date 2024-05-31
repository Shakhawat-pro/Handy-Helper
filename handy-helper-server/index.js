const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;


// middleware
app.use(cors({
    origin: ['http://localhost:5173', "https://handyhelper-e2f7f.web.app",'https://handyhelper-e2f7f.firebaseapp.com' ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify the allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed request headers
}));
app.use(express.json())
app.use(cookieParser());

console.log(process.env.DB_USER);


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t8njxkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const logger = (req, res, next) => {
    console.log("logger",req.method, req.url);
    next()
}

const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token
    console.log("Token in middleware", token);
    // no token
    if(!token){
        return res.status(401).send({message: 'Unauthorized access'})
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) =>{
        if(err){
            return res.status(401).send({message: 'Unauthorized access'})
        }
        req.user = decode
        next()
    } )
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();

    const serviceCollection =client.db('handyHelper').collection('services')
    const categoryCollection = client.db('handyHelper').collection('category')
    const bookingsCollection = client.db('handyHelper').collection('bookings')
    
    // auth

    app.post('/jwt', async(req, res) => {
        const user = req.body
        console.log('user for token',user);
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        })
        res.send({success: true})
    })
    app.post('/logout', async(req, res) => {
        const user = req.body
        res.clearCookie('token', {maxAge: 0}).send({success: true})
    })

    // Booooookings


    // app.get('/bookings',logger, verifyToken, async(req, res) =>{
    //     console.log("token owner info", req.user);
    //     console.log(req.query.email)
    //     if(req.user.email !== req.query.email){
    //         return res.status(401).send({message: 'forbidden access'})

    //     }
    //     let query = {};
    //     if (req.query?.email) {
    //         query = { customerEmail: req.query.email }
    //     }
    //     const result =await bookingsCollection.find(query).toArray()
    //     res.send(result)
    // })

    app.get('/bookings', logger, verifyToken, async (req, res) => {
        console.log("token owner info", req.user);
        console.log(req.query.email)
        if (req.user.email !== req.query.email) {
            return res.status(401).send({ message: 'Forbidden access' })
        }
    
        let query = {};
        if (req.query?.email && req.query?.role === 'customer') {
            query = { customerEmail: req.query.email }
        } else if (req.query?.email && req.query?.role === 'provider') {
            query = { providerEmail: req.query.email }
        }
    
        try {
            const result = await bookingsCollection.find(query).toArray()
            res.send(result)
        } catch (error) {
            console.error("Error fetching bookings:", error);
            res.status(500).send({ message: "Internal server error" });
        }
    })

    app.post(`/bookings`, async(req, res) =>{
        const booking = req.body
        console.log(booking);
        const result = await bookingsCollection.insertOne(booking);
        res.send(result)
    })

    app.patch('/bookings/:id', async(req, res) =>{
        const id = req.params.id
        const filter = {_id: new ObjectId(id)}
        const updateBooking = req.body
        console.log(updateBooking);
        const booking = {
            $set:{
                status: updateBooking.status
            }
        }
        const result = await bookingsCollection.updateOne(filter, booking)
        res.send(result)
    })



    // services

    app.get('/services', async(req, res) =>{
        const result = await serviceCollection.find().toArray()
        res.send(result)
    })

    app.get('/services/:id', async(req, res) =>{
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result = await serviceCollection.findOne(query)
        res.send(result)
    })

    app.post('/services', async(req, res) => {
        const newServices = req.body;
        console.log(newServices);
        const result = await serviceCollection.insertOne(newServices)
        res.send(result)
    })

    app.delete('/services/:id', async(req, res) => {
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result =await serviceCollection.deleteOne(query)
        res.send(result)

    })

    app.put('/services/:id', async(req, res) => {
        const id = req.params.id
        const updateService = req.body
        console.log(updateService);
        const filter = {_id: new ObjectId(id)}
        const options = { upsert: true };
        const service ={
            $set:{
                imgURL : updateService.imgURL,
                serviceName : updateService.serviceName,
                price : updateService.price,
                serviceArea : updateService.serviceArea,
                description : updateService.description,
                providerEmail : updateService.providerEmail,
                providerImage : updateService.providerImage,
                providerName : updateService.providerName,
                category : updateService.category,
            }
        }

        const result = await serviceCollection.updateOne(filter, service, options)
        res.send(result)

    })


    // Category 

    app.get('/category', async(req, res) =>{
        const result = await  categoryCollection.find().toArray()
        res.send(result)
    })

    app.get('/category/:id', async(req, res) =>{
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result = await categoryCollection.findOne(query)
        res.send(result)
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send('Handy Helper server is running')
})

app.listen(port, () => {
    console.log(`Handy Helper Server is running on port: ${port}`, );
})