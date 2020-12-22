const
    express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    FriendModel = require('./models/Friends'),
    cors = require('cors'),
    path = require('path')

require('dotenv').config()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
})

app.post('/addfriend', async (req, res) => {
    const { name, age, description } = req.body

    const friend = new FriendModel({ name, age })

    if (description)
        friend.description = description

    await friend.save()
    res.send('Success')
})

app.get('/read', async (req, res) => {
    FriendModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(
                result.map(({ name, age, description, _id: id }) => ({ name, age, description, id }))
            )
        }
    })
})

app.put('/update', async (req, res) => {
    const { newAge, id } = req.body

    try {
        await FriendModel.findById(id, (err, friendToUpdate) => {
            friendToUpdate.age = newAge
            friendToUpdate.save()
        })
    } catch (err) {
        console.error(err)
    }

    res.send('updated')
})

app.delete('/delete/:id', async (req, res) => {
    const { id } = req.params

    await FriendModel.findByIdAndRemove(id).exec()
    res.send('deleted')
})

app.listen(PORT, () => console.log(`Listening on port PORT`))

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('../client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join('../', 'client', 'build', 'index.html'))
    })
}