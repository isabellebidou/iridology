import React from "react";
import { Link } from "react-router-dom";
import ReadingList from './readings/ReadingList';
import UserData from './UserData';
import EyesList from './eyes/EyeList';
import Eyes from './Eyes';



const Dashboard = () => {
    return(
        <div>
            <h2>Dashboard</h2>
            <UserData />
            <EyesList />
            <Eyes />
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