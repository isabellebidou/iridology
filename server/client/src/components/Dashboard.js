import React from "react";
import { Link } from "react-router-dom";
import ReadingList from './readings/ReadingList';


const Dashboard = () => {
    return(
        <div>
        <ReadingList />
            <div className="fixed-action-btn">
                <Link to= "/readings/new" className="btn-floating btn large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    )

}

export default Dashboard;