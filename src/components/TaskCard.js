import React from 'react';
import { MdLocationCity } from "react-icons/md";
function TaskCard({ task }) {
    return (
        <div className="userFeedTask__wrapper standardShadowBox">
            <div className="userFeedTask--titleAndFav">
                <div className="userFeedTask__title">
                    <p>{task.taskTitle}</p>
                </div>
            </div>
            <div className="userFeedTask--priceAndInfo">
                <div className="userFeedTask__price">
                    <p>Budžet</p>
                    <h4>{task.taskPrice} din</h4>
                </div>
                <div className="userFeedTask__address"><MdLocationCity />
                    <p>{task.taskAddress}</p></div>
            </div>
            <div className="userFeedTask__taskDescription"><p>{task.taskBody.substring(0, 200)}...</p></div>
            <div className="userFeedTask__taskOwner">{task.taskOwnerName}</div>
        </div>
    );
}

export default TaskCard;
