const PORT = 8000
const {MongoClient} = require('mongodb')
const express = require('express')
const { v4 : uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require('bcrypt')
const uri = 'mongodb+srv://rajatsharda23:Tinu17109@cluster0.tjy2edi.mongodb.net/?retryWrites=true&w=majority'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.json('Hello to my App')
})

app.post('/signup', async (req,res) => {
    const client = new MongoClient(uri)
    const {email, password} = req.body
    const generateUserId = uuidv4()
    const hashedPassowrd = await bcrypt.hash(password,10)

    try{
        await client.connect()
        const database = client.db('RhythMatch')
        const users = database.collection('users')
        
        const sanitizedEmail = email.toLowerCase()
        const existingUser = await users.findOne({email})
        
        if(existingUser){
            return res.status(409).send('User already exists. Please Login!')
        }

        const data = {
            userId : generateUserId,
            email : sanitizedEmail,
            hashedPassowrd : hashedPassowrd,
        }
        const insertedUser = await users.insertOne(data)
        
        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn : 60 * 1
        })

        res.status(201).json({token, userId: generateUserId, email: sanitizedEmail})

    } catch(err) {
        console.log(err)
        console.log('err')
    }

})


app.post('/login', async (req,res) => {
    const client = new MongoClient(uri)
    const { email, password } = req.body

    try{
        await client.connect()
        const database = client.db('RhythMatch')
        const users = database.collection('users')
        const temp = email.toLowerCase()
        const user = await users.findOne({ email: temp })
        // console.log(user)

        if(user && (await bcrypt.compare(password, user.hashedPassowrd))){
            const token = jwt.sign(user, temp, {
                expiresIn : 60 * 1
            })
            res.status(201).json({ token, user: user.userId, email: temp })
            return
        }
        
        res.status(400).send('Invalid Credentials')
    } catch(err) {
        console.log(err)
    }
})

app.get('/users', async(req,res) => {
    const client = new MongoClient(uri)

    try{
        await client.connect()
        const database = client.db('RhythMatch')
        const users = database.collection('users')
        const returnedUser = await users.find().toArray()
        res.send(returnedUser)
    } finally {
        await client.close()
    }

})

app.listen(PORT, () => console.log('Server runnning on PORT ' + PORT))