const express = require('express');
const path = require('path');
const morgan = require('morgan')


// инициализация серверного приложения
const app = express();

// создал дефолтный порт
const PORT = 3000;

// погран. служба / парсит тело из формы
app.use(express.urlencoded({ extended: true }))

// погран. служба регистрации / парсит JSON
app.use(express.json())

// "служба" фиксации логов
app.use(morgan('combined'));

// обработчик GET (бывают любые другие POST, PUT, DELETE) запроса (end-point, "ручка")
app.get('/', (req, res) => {
    try {
        res.send('Ok!')
    } catch (error) {
        res.json({ message: error.message }) 
    }
})


// запускаю прослушивание сервера на 3000 порту
app.listen(PORT, () => console.log(`Server started at ${PORT} port`))
