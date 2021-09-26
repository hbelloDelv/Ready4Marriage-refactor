import React from 'react';
import img from './img/ishaq.jpg';
import {FaHeart, FaEnvelope, FaStar, FaMale, FaCheck, FaTimes } from "react-icons/fa";
import '../encounter.css';

function EncounterContent() {
    return (
        <div className="encounterContentWrapper">
            <div className="encounerHeader">
                <h4>Encounters</h4>
                <div className="sectionsWrapper">
                    <div className="leftSection">
                        <div className="leftSection-img">
                           <img src={img} alt={"encounterImage"} />
                        </div>
                        <div className="leftSection-LikeButton">
                            <FaHeart className="myFavoritePersonIcon"/>
                        </div>

                        <div className="leftSection-MessageButton">
                            <FaEnvelope className="encounterMessageIcon"/>
                        </div>
                        <div className="leftSection-DeleteButton">
                            <FaTimes className="encounterDeleteIcon"/>
                        </div>
                    </div>
                    <div className="rightSection">
                            <div className="rightSection-one">
                                <p className="rightSectionPersonName">Sani Austine <span>.</span> <span>27</span> <span>.</span></p>
                                <p className="stateLocationText">Nigeria, <span>Kaduna</span></p>
                                <div className="rightSection-icons">
                                    <div className="gender-icon">
                                        <FaMale className="genderIconEmoji"/>
                                    </div>
                                    <div className="status-icon">
                                        <FaCheck className="statusIconEmoji"/>
                                    </div>
                                    <div className="category-icon">
                                        <FaStar className="categoryIconEmoji"/>
                                    </div>
                                </div>
                            </div>
                            <div className="rightSection-two">
                                <div className="sex">Sex:</div>
                                <div className="status">Status</div>
                                <div className="valueText">Male</div>                              
                                <div className="valueText">Single</div>
                                <div className="iam-lokingFor">I am looking for</div>
                                <div className="religon">Religion</div>
                                <div className="valueText">Marriage</div>                               
                                <div className="valueText">Neutral</div>
                            </div>
                            <div className="rightSection-three">
                            <p>Description</p>
                                <p className="valueText">You love yourself</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EncounterContent
