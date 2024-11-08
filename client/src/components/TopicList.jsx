import React, {useEffect, useState} from 'react';
import Topic from "./Topic.jsx";

function TopicList(props) {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        loadTopics()
    })

    async function loadTopics() {
        const response = await fetch('/api/topics');
        const data = await response.json()
        setTopics(data)
    }

    return (
        <div>
            {topics.map((el) => <Topic key={el.id} id={el.id} imgPath={el.img_path} name={el.name}/>)}
        </div>
    );
}

export default TopicList;
