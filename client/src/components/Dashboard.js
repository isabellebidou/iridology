import React from "react";
import { Link } from "react-router-dom";
import ReadingList from './readings/ReadingList';
import UserData from './UserData';
import UserDataList from './userData/UserDataList';
import EyesList from './eyes/EyeList';
import Eyes from './Eyes';
import DataStored from './DataStored';
import Buttons from './Buttons';
import Instructions from './Instructions';
//import Landing from './Landing';




const Dashboard = () => {
    return(
        <div className="dashboard">
            <Instructions />
            <ReadingList />
            <UserData />
            <EyesList />
            <Buttons />
            

        </div>
    )

}

export default Dashboard;