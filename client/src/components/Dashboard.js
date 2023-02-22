import React from "react";

import ReadingList from './readings/ReadingList';
import UserData from './UserData';

import EyesList from './eyes/EyeList';

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