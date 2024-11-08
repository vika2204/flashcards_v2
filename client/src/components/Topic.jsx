import React from 'react';
import { Link } from 'react-router-dom';

function Topic(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.imgPath} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <Link to={'/topics/' + props.id} className="btn btn-primary">Начать квиз</Link>
            </div>
        </div>
    );
}

export default Topic;
