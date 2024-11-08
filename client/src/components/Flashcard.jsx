import React, {useState} from 'react';

function Flashcard(props) {

    let [currentAnswer, setAnswer] = useState('');

    let changeAnswer = (e) => {
        setAnswer(e.target.value);
    }

    let checkAnswer = () => {
        let rightAnswer = props.answer;
        if (rightAnswer.toLowerCase() === currentAnswer.toLowerCase()) {
            alert('Ну мёёд! :)');
            props.onSuccess(props.id);
            return;
        }

        alert ('неееее :(');
    }

    return (
        <div className="card" style={{width: "36rem"}}>
            <img src={props.imgPath} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">Вопрос #{props.id}</h5>
                <p className="card-text">{props.question}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><input onChange={changeAnswer} className="form-control" placeholder="введите ответ"/></li>
                <li className="list-group-item"><a onClick={checkAnswer} className="btn btn-primary">Ответить</a></li>
                <li className="list-group-item"><a href="#" className="btn btn-secondary">Дальше</a></li>
            </ul>

        </div>
    );
}

export default Flashcard;
