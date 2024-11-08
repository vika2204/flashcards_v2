import React, {useEffect, useState} from 'react';
import Topic from "./Topic.jsx";
import Flashcard from "./Flashcard.jsx";
import {useParams} from "react-router-dom";
import flashcard from "./Flashcard.jsx";

function FlashcardList(props) {
    const { topicId } = useParams();
    let [flashcards, setFlashcards] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        loadFlashcards(topicId)
    }, [status])

    async function loadFlashcards(topicId) {

        const response = await fetch(`http://localhost:5173/api/topics/${topicId}/flashcards`);
        const data = await response.json()
        if (Array.isArray(data)) {
            setFlashcards(data)
        }
    }

    let success = (flashcardId) => {
        flashcards = flashcards.filter(
            (el) => el.id !== flashcardId
        );
        setFlashcards(flashcards);
    }

    return (
        <div className="flashcardList">
            {flashcards.map((el) => <Flashcard onSuccess={success} answer={el.answer} key={el.id} id={el.id} imgPath={el.img_path} question={el.question}/>)}
        </div>
    );
}

export default FlashcardList;
