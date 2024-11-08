const express = require('express');
const path = require('path');
const morgan = require('morgan')
const { Topic } = require('./db/models');
const { Flashcard } = require('./db/models');

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('combined'));

// end-point
app.get('/', (req, res) => {
    try {
                res.status(200).send('Ok!')
    } catch (error) {
        res.json({ message: error.message }) 
    }
})

app.post('/topic', async (req,res) => {
    try {
        const allTopics = await Topic.findAll()
        res.status(200).json(allTopics)
    } catch (error) {
        res.status(500).json({ message: error.message })  
    }
})
app.post('/flashcard',async (req,res) => {
    try {
        const allTopics = await Flashcard.findAll()
        res.status(200).json(allTopics)
    } catch (error) {
        res.status(500).json({ message: error.message })  
    }
})

app.post('/topic/:id', (req,res) => {
    try {
        const { id } = req.params
        const choisedTopicById = Topic.findByPk(id)
        res.status(200).json(choisedTopicById)
    } catch (error) {
        res.status(500).json({ message: error.message}) 
    }
})
app.post('/flashcard/:id', (req,res) => {
    try {
       const { id } = req.params
       const choisedFlashcardById = Flashcard.findByPk(id)
       res.status(200).json(choisedFlashcardById)  
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

// запускаю прослушивание сервера на 3000 порту
app.listen(PORT, () => console.log(`Server started at ${PORT} port`))
