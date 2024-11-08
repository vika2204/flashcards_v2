const express = require('express');
const path = require('path');
const morgan = require('morgan')
const { Topic } = require('./db/models');
const { Flashcard } = require('./db/models');
const { where } = require('sequelize');

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

app.get('/api/topics', async (req,res) => {
    try {
        const allTopics = await Topic.findAll()
        res.status(200).json(allTopics)
    } catch (error) {
        res.status(500).json({ message: error.message })  
    }
})
// app.get('/flashcards',async (req,res) => {
//     try {
//         const allTopics = await Flashcard.findAll()
//         res.status(200).json(allTopics)
//     } catch (error) {
//         res.status(500).json({ message: error.message })  
//     }
// })

// app.get('/topics/:id', (req,res) => {
//     try {
//         const { id } = req.params
//         const choisedTopicById = Topic.findByPk(id)
//         res.status(200).json(choisedTopicById)
//     } catch (error) {
//         res.status(500).json({ message: error.message}) 
//     }
// })
// app.get('/flashcards/:id', (req,res) => {
//     try {
//        const { id } = req.params
//        const choisedFlashcardById = Flashcard.findByPk(id)
//        res.status(200).json(choisedFlashcardById)  
//     } catch (error) {
//         res.status(500).json({ message: error.message})
//     }
// })

app.get('/api/topics/:id/flashcards', async (req,res) => {
    try {
        const { id } = req.params;
        const allFlashcards = await Flashcard.findAll({ where: { topic_id: id } });
        res.status(200).json(allFlashcards);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Произошла ошибка при получении карточек', error: error.message });
    }
});

// прослушивание сервера на 3000 порту
app.listen(PORT, () => console.log(`Server started at ${PORT} port`))
