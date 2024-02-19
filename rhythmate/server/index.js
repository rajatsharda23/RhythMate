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
            user_id : generateUserId,
            email : sanitizedEmail,
            hashedPassowrd : hashedPassowrd,
        }
        const insertedUser = await users.insertOne(data)
        
        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn : 60 * 1
        })

        res.status(201).json({ token, user_id: generateUserId})

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
            res.status(201).json({ token, user_id: user.user_id})
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

app.put('/users', async (req,res)=>{
    const client = new MongoClient(uri)
    const formData = req.body.formData 

    try{
        await client.connect()
        const database = client.db('RhythMatch')
        const users = database.collection('users')
        console.log(formData)
        const user = await users.findOne({ user_id: formData.user_id })
        // if(!user){
        //     res.status(404).send('User not Found')
        // }
        const query = { user_id: formData.user_id }
        const updateDocument = {
            $set: {
                first_name : formData.first_name,
                dob_day : formData.dob_day,
                dob_month : formData.dob_month,
                dob_year : formData.dob_year,
                show_gender : formData.show_gender,
                gender_identity : formData.gender_identity,
                gender_interest : formData.gender_interest,
                url : formData.url,
                about : formData.about,
                matches : formData.matches
            },
        }

        const insertedUser = await users.updateOne(query, updateDocument)
        console.log(user)
        res.send(insertedUser)

    } finally {
        await client.close()
    }

})


















app.listen(PORT, () => console.log('Server runnning on PORT ' + PORT))