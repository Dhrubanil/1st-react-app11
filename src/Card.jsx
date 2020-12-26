import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Card = (props) => {
    return (
        <React.Fragment>
            <div className="col-md-4 col-10 mx-auto card_h">
                <div className="card card_h1">
                    <img src={props.imgsrc} className="card-img-top cardimg" alt="loading..." />
                    <div className="card-body">
                        <h3 className="card-title card1"><strong>{props.sname}</strong></h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href={props.link} className="btn btn_al1 btn-primary">Go To Course</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Card;